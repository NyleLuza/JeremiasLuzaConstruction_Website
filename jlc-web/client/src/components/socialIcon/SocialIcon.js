function SocialIcon({ link, icon }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={icon} style={{ width: "40px" }} />
    </a>
  );
}
export default SocialIcon;
