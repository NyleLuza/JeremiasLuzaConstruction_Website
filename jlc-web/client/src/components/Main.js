import img from "./imgs/house1_front.jpg";

function Main() {
  return (
    <div
      className="d-flex flex-column flex-grow-1"
      style={{ minheight: "100vh", paddingTop: "60px" }}
    >
      {/*<img
        src={img}
        alt="Example"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />*/}

      {/* first section of the body */}
      <div
        className="d-flex flex-grow-1"
        style={{ height: "500px", color: "black" }}
      >
        <div className="d-flex" style={{ height: "500px", color: "black" }}>
          <img
            src={img}
            alt="Example"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="d-flex flex-grow-1">sdfsf</div>
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
