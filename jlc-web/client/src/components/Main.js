import img from "./imgs/house1_front.jpg";
import simo_rear1 from "./imgs/simo/simo_rear1.jpg";
import simo_rear2 from "./imgs/simo/simo_rear2.jpg";
import simo_rear3 from "./imgs/simo/simo_rear3.jpg";
import simo_masterbath1 from "./imgs/simo/simo_masterbath1.jpg";
import pops from "./imgs/jerryluza.jpeg";
import BodyButton from "./bodyButton/BodyButton";
import { Navigate, useNavigate } from "react-router-dom";

function Main() {
  const nav = useNavigate();
  return (
    <div
      id="home"
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
              <BodyButton
                label="See Our Projects"
                onClick={() => {
                  nav("/Projects");
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second section of the body*/}
      <section
        id="about"
        className="d-flex flex-grow-1"
        style={{ height: "100vh", color: "black" }}
      >
        <div className="d-flex flex-grow-1 align-items-center justify-content-center">
          <div
            className="d-flex"
            style={{
              height: "70vh",
              width: "60vh",
              backgroundImage: `URL(${pops})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 10%",
              border: "2px solid grey",
            }}
          ></div>
        </div>
        <div className="d-flex flex-grow-1 flex-column align-items-center justify-content-center">
          <h2>Jeremias Luza</h2>
          <div style={{ maxWidth: "550px", textAlign: "center" }}>
            Licensed contractor and civil engineer (in the Philippines)
          </div>
          <p
            className="d-flex"
            style={{
              marginTop: "20px",
              marginBottom: "1rem",
              lineHeight: "1.6",
              maxWidth: "500px",
              fontSize: "15px",
              color: "black",
              textAlign: "center",
            }}
          >
            Over 20 years of experience in residential and multi-family
            construction. Expertise in design/budgeting, project management, and
            general construction. Recently assisted the successful completion of
            a 52-unit apartment building in Los Angeles. This also led to the
            completion of multiple custom homes in West Los Angeles, Pacific
            Palisades, and Beverly Hills areas. Strong background in
            multi-family/single family projects, structural integrity assessment
            and efficient project execution.
          </p>
        </div>
      </section>
    </div>
  );
}
export default Main;
