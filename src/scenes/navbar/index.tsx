import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import "./navbar.css";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
      <div
        className={`navbar ${!isTopOfPage ? "navbar-scrolled" : ""
          }`}
      >
        <div className="navbar-container">
          <div className="navbar-inner">

            <img className="navbar-logo" alt="logo" src={Logo} />


            {isAboveMediumScreens ? (
              <div className="navbar-desktop">
                <div className="navbar-links">
                  <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>

                <div className="navbar-actions">
                  <p className="navbar-signin">Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (

              <button
                className="navbar-toggle"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="navbar-icon" />
              </button>
            )}
          </div>
        </div>
      </div>


      {!isAboveMediumScreens && isMenuToggled && (
        <div className="mobile-menu">
          <div className="mobile-menu-close">
            <button onClick={() => setIsMenuToggled(false)}>
              <XMarkIcon className="mobile-close-icon" />
            </button>
          </div>

          <div className="mobile-menu-links">
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
