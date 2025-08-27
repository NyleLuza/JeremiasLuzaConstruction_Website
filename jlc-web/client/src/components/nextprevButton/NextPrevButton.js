//TODO: - Set up Cloudflare
//    X  - Create route to pull images from aws s3
//    X  - Synchronize images and house descriptions
//       - Fix sizing of section
//       - Align text of description
//       - Clean up text and frame images

import { useState, useEffect, useRef } from "react";
import axios from "axios";
function NextPrevButton() {
  const [houses, setHouses] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [i, setI] = useState(0);
  const current = houses[i] || {
    remodelType: "remodel",
    address: "address",
    description: "desc",
    image: "image",
  };

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/houses");
        console.log(data);
        setHouses(Array.isArray(data) ? data : []);
        setI(0);
      } catch (error) {
        const errorMessage =
          error.response?.data?.error || "Error obtaining picture";
        console.error(errorMessage);
        alert(errorMessage);
      }
    })();
    return () => ac.abort();
  }, []);

  const animate = () => {
    setIsActive(false);
    setTimeout(() => {
      setIsActive(true); // fade back in
    }, 300);
  };
  const next = (e) => {
    e.preventDefault();
    console.log(current);
    animate();
    setI((prev) => (prev + 1) % houses.length);
  };

  const prev = (e) => {
    e.preventDefault();
    animate();
    setI((prev) => (prev - 1 + houses.length) % houses.length);
  };
  return (
    <main className="d-flex flex-grow-1 justify-content-center align-items-center">
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
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <h2>{current.remodelType}</h2>
          <div style={{ transition: "#000000 0.3s ease-in-out" }}>
            {current.address}
          </div>
          <div style={{ transition: "#000000 4s ease-in-out" }}>
            {current.description}
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button onClick={prev}>Prev</button>
          <button onClick={next}>Next</button>
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
            backgroundImage: `URL(${current.image})`,
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
