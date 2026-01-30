import React from "react";
import "./shared.css";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return <h1 className="heading-text">{children}</h1>;
};

export default HText;
