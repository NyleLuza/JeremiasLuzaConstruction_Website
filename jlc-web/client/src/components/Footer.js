import ContactForm from "./contactForm/ContactForm";
import logo from "./logos/logo3rev.png";
import instaLogo from "./logos/instagram.svg";
import linkedinLogo from "./logos/linkedin.svg";
import tiktokLogo from "./logos/tiktok.svg";
import youtubeLogo from "./logos/youtube.svg";
import SocialIcon from "./socialIcon/SocialIcon";
function Footer() {
  return (
    <footer
      className="d-flex flex-grow-1 justify-content-center"
      style={{ minHeight: "350px", backgroundColor: "#40509d" }}
    >
      <div className="d-flex flex-column">
        <div style={{ marginTop: "105px" }}>
          <img src={logo} />
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ paddingTop: "10px" }}
        >
          <SocialIcon link="https://www.instagram.com" icon={instaLogo} />
          <SocialIcon link="https://www.tiktok.com" icon={tiktokLogo} />
          <SocialIcon link="https://www.linkedin.com" icon={linkedinLogo} />
          <SocialIcon link="https://www.youtube.com" icon={youtubeLogo} />
        </div>
      </div>
      <div
        className="d-flex flex-column justify-content-center"
        style={{
          paddingLeft: "120px",
          paddingRight: "120px",
          color: "#F5F5F5",
        }}
      >
        <h2 className="d-flex" style={{ paddingBottom: "20px" }}>
          Contact Us:
        </h2>
        <h4>Tel: 818-234-2124</h4>
        <h4>Email: jbl@const.com</h4>
      </div>
      <div className="d-flex">
        <ContactForm />
      </div>
    </footer>
  );
}
export default Footer;
