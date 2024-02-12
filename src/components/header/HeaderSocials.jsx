import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/humay-maharram/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/HumayMKH"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      {/* <a href="http://dribbble.com" target="_blank" rel="noopener noreferrer">
        <FiDribbble />
      </a> */}
    </div>
  );
};

export default HeaderSocials;
