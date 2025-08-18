//TODO: - Set up Cloudflare
//      - Create route to pull images from aws s3
//      - Synchronize images and house descriptions

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

      console.error("key pressed", houses._id);
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Error obtaining picture";
      console.error(errorMessage);
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
    <main
      className="d-flex flex-grow-1 justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      {/*left hand side for pictures*/}
      <div
        className="d-flex flex-grow-1 flex-column"
        style={{ height: "100%", width: "100%" }}
      >
        <div
          className="d-flex flex-grow-1 justify-content-center align-items-center"
          style={{
            backgroundImage: `URL(${buttonState.prevImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <img
            src={buttonState.prevImage}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      {/*right hand side for text and description*/}
      <div
        className="d-flex flex-grow-1 flex-column justify-content-center"
        style={{ height: "100%", width: "100%" }}
      >
        <div
          className="d-flex justify-content-center"
          style={{ height: "100%" }}
        >
          <h1>Featured Projects</h1>
        </div>
        <div
          className="d-flex align-items-center flex-column"
          style={{ height: "100%" }}
        >
          <h2>{buttonState.prevRemodelType}</h2>
          <div>{buttonState.prevAddress}</div>
          <div>{buttonState.prevDescription}</div>
        </div>
        <div className="d-flex justify-content-end">
          <button onClick={handleNextClick}>Prev</button>
          <button onClick={handleNextClick}>Next</button>
        </div>
      </div>
    </main>
  );
}
export default NextPrevButton;
