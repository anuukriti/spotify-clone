import React from "react";
import "../styles/MainMenu.css";
import NavBar from "./NavBar";
import Body from "./Body";
import Footer from "./Footer";

function MainMenu() {
    return (
        <div className="mainContainer">
            <NavBar />
            <Body />
            <Footer />
        </div>
    );
}

export default MainMenu;
