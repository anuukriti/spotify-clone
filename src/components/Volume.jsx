import React from "react";
import "../styles/Volume.css";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";

function Volume() {
    const [{ token }] = useStateProvider();
    const setVolume = async (e) => {
        await axios.put(
            "https://api.spotify.com/v1/me/player/volume",
            {},
            {
                params: {
                    volume_percent: parseInt(e.target.value),
                },
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            }
        );
    };

    return (
        <div className="volumeSection">
            <input
                type="range"
                min={0}
                max={100}
                onMouseUp={(e) => setVolume(e)}
            />
        </div>
    );
}

export default Volume;
