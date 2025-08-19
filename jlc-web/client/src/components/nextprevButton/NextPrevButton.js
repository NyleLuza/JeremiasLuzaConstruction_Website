//TODO: - Set up Cloudflare
//    X  - Create route to pull images from aws s3
//    X  - Synchronize images and house descriptions
//       - Fix sizing of section
//       - Align text of description
//       - Clean up text and frame images

import { useState, useEffect } from "react";
import axios from "axios";
function NextPrevButton() {
  const [isActive, setIsActive] = useState(true);
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
    setIsActive(false);
    setTimeout(() => {
      setIsActive(true); // fade back in
    }, 300); // matches CSS duration
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
      style={{ height: "calc(100vh - 60px)" }}
    >
      {/*left hand side for text and description*/}
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
          style={{
            height: "100%",
            opacity: isActive ? 1 : 0,
            transform: isActive ? "translateX(0)" : "translateX(-30px)",
            transition: "all 0.5s ease",
          }}
        >
          <h2>{buttonState.prevRemodelType}</h2>
          <div style={{ transition: "#000000 0.3s ease-in-out" }}>
            {buttonState.prevAddress}
          </div>
          <div style={{ transition: "#000000 4s ease-in-out" }}>
            {buttonState.prevDescription}
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button onClick={handleNextClick}>Prev</button>
          <button onClick={handleNextClick}>Next</button>
        </div>
      </div>
      {/*right hand side for pictures*/}
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
            transition: "0.8s",
          }}
        ></div>
      </div>
    </main>
  );
}
export default NextPrevButton;
