import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";
import "./shared.css";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="action-button"
      href={`#${SelectedPage.ContactUs}`}
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
