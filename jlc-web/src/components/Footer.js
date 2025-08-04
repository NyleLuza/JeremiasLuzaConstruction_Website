import ContactForm from "./contactForm/ContactForm";
import logo from "./logos/logo3rev.png";
function Footer() {
  return (
    <footer
      className="d-flex flex-grow-1"
      style={{ minHeight: "350px", backgroundColor: "#40509d" }}
    >
      <div style={{ marginTop: "105px", paddingLeft: "120px" }}>
        <img src={logo} />
      </div>
      <div
        className="d-flex flex-column justify-content-center"
        style={{
          paddingLeft: "120px",
          paddingRight: "80px",
          fontFamily: "Helvetica",
          color: "#F5F5F5",
        }}
      >
        <h1 className="d-flex" style={{ paddingBottom: "20px" }}>
          Contact Us
        </h1>
        <h4>Tel: 818-234-2124</h4>
        <h4>Email: jbl@const.com</h4>
      </div>
      <div className="d-flex flex-grow-1">
        <ContactForm />
      </div>
    </footer>
  );
}
export default Footer;
