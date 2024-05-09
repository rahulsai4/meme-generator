import React from "react";
import troolImg from "../images/trollface.png";

const Header = () => {
    return (
        <nav className="header">
            <img src={troolImg} />
            <h3 className="header-title">Meme Generator</h3>
            <small>React Course Project 3</small>
        </nav>
    );
};

export default Header;
