import Logo from "@/assets/Logo.png";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <img className="footer-logo" alt="logo" src={Logo} />
          <p className="footer-text">
            Join a community where fitness meets motivation. From expert-led classes to personalized training, we help you build strength, stay active, and achieve your goals every step of the way.
          </p>
        </div>


        <div className="footer-links">
          <h4 className="footer-title">Links</h4>

          <a
            href="https://github.com/Faisalyaqoob87"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/faisal-yaqoob-4075443a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="mailto:faisalyaqoob8787@gmail.com"
            className="footer-social"
          >
            <FaEnvelope /> Email
          </a>
        </div>


        <div className="footer-contact">
          <h4 className="footer-title">Contact Us</h4>

          <p className="footer-name">Faisal Yaqoob</p>
          <p className="footer-role">Frontend Developer @ HawkLogix</p>

          <p className="footer-contact-item">
            <FaEnvelope /> faisalyaqoob8787@gmail.com
          </p>

          <p className="footer-contact-item">
            <FaPhoneAlt /> 0306-4487363
          </p>

          <p className="footer-contact-item">
            <FaMapMarkerAlt /> Lahore, Pakistan
          </p>
        </div>
      </div>


      <p className="footer-copy footer-center">
        © Evogym All rights reserved & Designed by Faisal Yaqoob.
      </p>
    </footer>

  );
};

export default Footer;
