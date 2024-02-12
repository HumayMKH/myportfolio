import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";

import "../footer/footer.css";

const Footer = () => {
  return (
    <footer>
      {/* <a href="#" className="footer__logo">
        Egator
      </a> */}

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/humay-maharram/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="http://instagram.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FiInstagram />
        </a>
        <a
          href="https://github.com/HumayMKH"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        {/* <small>&copy; EGATOR Tutorials. All rights reserved.</small> */}
      </div>
    </footer>
  );
};

export default Footer;
