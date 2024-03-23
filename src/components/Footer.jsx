import React from "react";
import "../styles/Footer.css";
import PlayerControls from "./PlayerControls";
import Volume from "./Volume";
import CurrentTrack from "./CurrentTrack";

function Footer() {
    return (
        <div className="footer">
            <div className="playerControlSection">
                <div className="currenttracksection">
                    <CurrentTrack />
                </div>
                <div className="playercontrolssection">
                    <PlayerControls />
                </div>

                <div className="volumesection">
                    <Volume />
                </div>
            </div>
        </div>
    );
}

export default Footer;
