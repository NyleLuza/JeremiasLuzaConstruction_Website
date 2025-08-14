import { useState, useEffect } from "react";
import axios from "axios";
function NextPrevButton() {
  const [buttonState, setButtonState] = useState({
    prevRemodelType: "remodel",
    prevAddress: "address",
    prevDescription: "desc",
    prevImage: "image",
  });
  const handleNextClick = async (event) => {
    event.preventDefault();

    let houses;
    try {
      const response = await axios.get("http://localhost:5000/api/houses");
      houses = response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Error obtaining picture";
      alert(errorMessage);
    }
    setButtonState({
      prevRemodelType: houses.remodelType,
      prevAddress: houses.address,
      prevDescription: houses.description,
      prevImage: houses.image,
    });
  };
  return (
    <main className="d-flex flex-grow-1 justify-content-center align-items-center">
      {/*left hand side for pictures*/}
      <div
        className="d-flex flex-grow-1 flex-column"
        style={{ height: "100vh" }}
      >
        <div className="d-flex flex-grow-1 justify-content-center align-items-center">
          {buttonState.prevImage}
        </div>
        <div className="d-flex justify-content-end">
          <button onClick={handleNextClick}>Prev</button>
          <button onClick={handleNextClick}>Next</button>
        </div>
      </div>

      {/*right hand side for text and description*/}
      <div className="d-flex flex-grow-1 flex-column justify-content-center">
        <h1>{buttonState.prevRemodelType}</h1>
        <div>{buttonState.prevAddress}</div>
        <div>{buttonState.prevDescription}</div>
      </div>
    </main>
  );
}
export default NextPrevButton;
