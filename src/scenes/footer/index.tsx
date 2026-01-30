import Logo from "@/assets/Logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-about">
          <img className="footer-logo" alt="logo" src={Logo} />
          <p className="footer-text">
            Join a community where fitness meets motivation. From expert-led classes to personalized training, we help you build strength, stay active, and achieve your goals every step of the way.
          </p>
          <p className="footer-copy">© Evogym All Rights Reserved.</p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4 className="footer-title">Links</h4>
          <p>Massa orci senectus</p>
          <p>Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4 className="footer-title">Contact Us</h4>
          <p className="footer-text">
            Tempus metus mattis risus volutpat egestas.
          </p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
