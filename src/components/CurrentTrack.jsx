import React, { useEffect } from "react";
import "../styles/CurrentTrack.css";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constant";

function CurrentTrack() {
    const [{ token, currentlyPlaying }, dispatch] = useStateProvider();
    useEffect(() => {
        const getCurrentTrack = async () => {
            const response = await axios.get(
                "https://api.spotify.com/v1/me/player/currently-playing",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                }
            );
            // console.log("response: ", response);
            if (response.data !== "") {
                const { item } = response.data;
                const currentlyPlaying = {
                    id: item.id,
                    name: item.name,
                    artists: item.artists.map((artist) => artist.name),
                    image: item.album.images[2].url,
                };

                dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
            }
        };
        getCurrentTrack();
    }, [token, dispatch]);

    return (
        <div className="currentTrack">
            {currentlyPlaying && (
                <div className="track">
                    <div className="track_image_">
                        <img
                            src={currentlyPlaying.image}
                            alt="currentluplaying"
                        />
                        {/* <img
                            src="https://wallpapercave.com/wp/wp8457645.jpg"
                            alt="image"
                        /> */}
                    </div>
                    <div className="track-info">
                        <h4>{currentlyPlaying.name}</h4>
                        <h6>{currentlyPlaying.artists.join(", ")}</h6>
                        {/* <h4>name</h4>
                        <h6>artist</h6> */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CurrentTrack;
