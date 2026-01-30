import { SelectedPage } from "@/shared/types";
import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./benefits.css";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon:React.ReactNode; 
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div variants={childVariant} className="benefit-card">
      <div className="benefit-icon-wrapper">
        <div className="benefit-icon">{icon}</div>
      </div>

      <h4 className="benefit-title">{title}</h4>
      <p className="benefit-description">{description}</p>

      <AnchorLink
        className="benefit-link"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        Learn More
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
