import IGlogo from "../assets/002-instagram.png";
import LIlogo from "../assets/001-linkedin-logo.png";
import GHlogo from "../assets/003-github.png";
import Add from "../assets/004-add.png";

function SocialIcons() {
  return (
    <div className="socialIcons">
      <a href="https://www.instagram.com/devandapaige/">
        <img alt="instagram" src={IGlogo} />
      </a>
      <a href="https://www.linkedin.com/in/devandapaige/">
        <img alt="linkedin" src={LIlogo} />
      </a>
      <a href="https://github.com/devandapaige">
        <img alt="github" src={GHlogo} />
      </a>
      <a href="https://calendar.amanda-nelson.com/">
        <img alt="add to calendar" src={Add} />
      </a>
    </div>
  );
}
export default SocialIcons;
