import img from "./imgs/house1.jpg";

function Main() {
  return (
    <div className="d-flex flex-grow-1">
      <img
        src={img}
        alt="Example"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}
export default Main;
