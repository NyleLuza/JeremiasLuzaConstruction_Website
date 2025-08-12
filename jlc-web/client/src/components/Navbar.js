import logo from "./logos/logo3rev10.png";
import Button from "./button/Button";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
      <HashLink smooth to="#home">
        <div className="d-flex">
          <img src={logo} />
        </div>
      </HashLink>

      <div className="d-flex justify-content-end flex-grow-1 gap-3">
        <HashLink smooth to="#home">
          <Button label="Home" />
        </HashLink>

        <HashLink smooth to="#about">
          <Button label="About" />
        </HashLink>

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
