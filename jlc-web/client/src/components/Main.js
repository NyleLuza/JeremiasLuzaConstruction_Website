import img from "./imgs/house1.jpg";

function Main() {
  return (
    <div className="d-flex flex-grow-1" style={{ minheight: "100vh" }}>
      <img
        src={img}
        alt="Example"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      {/*<div className="d-flex " style={{ height: "3000px" }}></div>*/}
    </div>
  );
}
export default Main;
