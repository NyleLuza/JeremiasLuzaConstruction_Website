import logo from "../assets/logos/logo1rev2rectangle60h.png";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  let nav = useNavigate();
  return (
    <nav
      className="d-flex flex-column justify-content-between fixed-top "
      style={{
        minHeight: "100px",
        backgroundColor: "#ffffff",
      }}
    >
      <section
        className="d-flex end"
        style={{
          height: "20%",
          width: "100%",
          backgroundColor: "rgb(64, 80, 157)",
          color: "#ffffff",
        }}
      >
        License #
      </section>
      <section
        className="d-flex flex-end px-5 navbar "
        style={{ height: "80%" }}
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
          <HashLink smooth to="#projects">
            <Button label="Feat Projects" />
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
      </section>
    </nav>
  );
}
export default Navbar;
