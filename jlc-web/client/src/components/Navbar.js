import logo from "./logos/logo3rev.png";
import Button from "./button/Button";
import BodyButton from "./bodyButton/BodyButton";
import { Navigate, useNavigate } from "react-router-dom";

function Navbar() {
  let nav = useNavigate();
  return (
    <nav
      className="d-flex align-items-center justify-content-between px-5 navbar fixed-top "
      style={{
        minHeight: "60px",
        backgroundColor: "#40509d",
      }}
    >
      <div className="d-flex">
        <img src={logo} />
      </div>
      <div className="d-flex justify-content-end flex-grow-1 gap-3">
        <Button label="Home" />
        <Button label="About" />
        <Button
          label="Projects"
          onClick={() => {
            nav("/Projects");
          }}
        />
        <Button
          label="Contact"
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
        />
      </div>
    </nav>
  );
}
export default Navbar;
