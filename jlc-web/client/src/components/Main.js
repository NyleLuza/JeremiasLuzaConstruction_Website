import img from "./imgs/house1_front.jpg";
import simo_rear1 from "./imgs/simo/simo_rear1.jpg";
import simo_rear2 from "./imgs/simo/simo_rear2.jpg";
import simo_rear3 from "./imgs/simo/simo_rear3.jpg";
import simo_masterbath1 from "./imgs/simo/simo_masterbath1.jpg";
import BodyButton from "./bodyButton/BodyButton";
import { useNavigate } from "react-router-dom";
import Projects from "../pages/projects/Projects";

function Main() {
  return (
    <div
      className="d-flex flex-column flex-grow-1"
      style={{ minheight: "100vh", paddingTop: "60px" }}
    >
      {/*
      <img
        src={img}
        alt="Example"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      */}
      {/* first section of the body*/}
      <div
        className="d-flex flex-grow-1"
        style={{ height: "calc(100vh - 60px)", color: "black" }}
      >
        <div
          className="d-flex justify-content-center align-items-center flex-grow-1"
          style={{
            backgroundImage: `URL(${simo_rear2})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            color: "black",
          }}
        >
          <div className="d-flex flex-column">
            <h1
              style={{
                color: "white",
                textShadow: "1px 2px 3px rgba(0, 0, 0, 0.7)",
              }}
            >
              Your Dream, Our Blueprint
            </h1>
            <div
              className="d-flex justify-content-center"
              style={{ paddingTop: "20px" }}
            >
              <BodyButton label="See Our Projects" />
            </div>
          </div>
        </div>
      </div>

      {/* Second section of the body*/}
      <div
        className="d-flex flex-grow-1 "
        style={{ height: "500px", color: "black" }}
      >
        heasdfasfdad
      </div>
    </div>
  );
}
export default Main;
