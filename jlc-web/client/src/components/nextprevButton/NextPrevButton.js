//TODO: - Set up Cloudflare
//       - resize images and upload to amazon s3
//       - style prev and next buttons
//       - clean up featured projects title

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import useFadeInOnScroll from "../useFadeInOnScroll.js";
import "../main.css";

function NextPrevButton() {
  const desc = useFadeInOnScroll();
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
          style={{ paddingTop: "20px" }}
        ></div>
        <div
          ref={desc.ref}
          className={`reveal-wrapper fade-in-element-mid d-flex align-items-left justify-content-center flex-column ${
            desc.isVisible ? "animate" : ""
          }`}
          style={{
            height: "100%",
            opacity: isActive ? 1 : 0,
            transform: isActive ? "translateX(0)" : "translateX(-30px)",
            transition: "all 0.5s ease",
            maxWidth: "500px",
            margin: "0 auto",
            textIndent: "0",
          }}
        >
          <div>{current.address}</div>
          <h2>{current.remodelType}</h2>

          <div>{current.description}</div>
        </div>
        <div className="d-flex justify-content-between">
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
