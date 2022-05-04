import React from "react";
import frontia from "../../images/frontia.jpg";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <h1> Front-end developer hub in chittagong.</h1>
      <img src={frontia} alt="front-end-developr" />
      <p>
        {" "}
        We are front end developer in chittagong base company frontia. We are
        skilled, tech lover and CSE graduated. We love create highly useer
        experience.
      </p>

      <h2>
        <b> Our yearly salary is 5,00,000 thousend doller.</b>
      </h2>
    </div>
  );
};

export default Header;
