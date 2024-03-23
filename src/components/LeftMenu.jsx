import React from "react";
import "../styles/LeftMenu.css";
import spotifyLogo from "../images/spotify-logo.png";
import { FaEllipsisH } from "react-icons/fa";
import { FaHome, FaSearch } from "react-icons/fa";
import { MdOutlineLibraryMusic } from "react-icons/md";
import Playlist from "./Playlist";
import CurrentTrack from "./CurrentTrack";

function LeftMenu() {
    return (
        <div className="leftmenu">
            <div className="logoContainer">
                <img height="35" src={spotifyLogo} alt="spotify_name" />
                <i>
                    <FaEllipsisH />
                </i>
            </div>
            <div className="content">
                <h4>Menu</h4>
                <ul>
                    <li>
                        <i>
                            <FaHome />
                        </i>
                        <span>Home</span>
                    </li>

                    <li>
                        <i>
                            <FaSearch />
                        </i>
                        <span>Search</span>
                    </li>
                    <li>
                        <i>
                            <MdOutlineLibraryMusic />
                        </i>
                        <span>Your Library</span>
                    </li>
                </ul>
            </div>

            {/* <br /> */}

            <div className="playlist_section">
                <Playlist />
            </div>
            <div className="currentTrackSection">{/* <CurrentTrack /> */}</div>
        </div>
    );
}

export default LeftMenu;
