import img from "./imgs/house1_front.jpg";

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
        style={{ height: "500px", color: "black" }}
      >
        <div
          className="d-flex flex-grow-1"
          style={{
            backgroundImage: `URL(${img})`,
            backgroundSize: "cover",
            height: "calc(100vh - 60px)",
            color: "black",
          }}
        >
          {/*
          <img
            className="d-flex"
            src={img}
            alt="Example"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "relative",
            }}
          />
          
          <div className="d-flex" style={{ position: "absolute" }}>
            sdfsdss
          </div>
          */}
        </div>
      </div>
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
