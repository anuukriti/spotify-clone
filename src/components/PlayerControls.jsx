import React from "react";
import "../styles/PlayerControls.css";
import { MdOutlinePlayCircle } from "react-icons/md";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { MdOutlinePauseCircle } from "react-icons/md";
import { FaShuffle } from "react-icons/fa6";
import { ImLoop } from "react-icons/im";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constant";

function PlayerControls() {
    const [{ token, playerState }, dispatch] = useStateProvider();
    const changeTrack = async (type) => {
        await axios.post(
            `https://api.spotify.com/v1/me/player/${type}`,
            {},
            {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            }
        );

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
        } else {
            dispatch({
                type: reducerCases.SET_PLAYING,
                currentlyPlaying: null,
            });
        }
    };

    const changeState = async () => {
        const state = playerState ? "pause" : "play";
        const response = await axios.put(
            `https://api.spotify.com/v1/me/player/${state}`,
            {},
            {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            }
        );
        dispatch({
            type: reducerCases.SET_PLAYER_STATE,
            playerState: !playerState,
        });
    };

    return (
        <div className="playerControls">
            <div className="ShuffleButton">
                <i>
                    <FaShuffle />
                </i>
            </div>
            <div className="prevButton">
                <i>
                    <MdSkipPrevious onClick={() => changeTrack("previous")} />
                </i>
            </div>
            <div className="playpauseButton">
                {playerState ? (
                    <i>
                        <MdOutlinePauseCircle onClick={changeState} />
                    </i>
                ) : (
                    <i>
                        <MdOutlinePlayCircle onClick={changeState} />
                    </i>
                )}
            </div>
            <div className="nextButton">
                <i>
                    <MdSkipNext onClick={() => changeTrack("next")} />
                </i>
            </div>
            <div className="loopButton">
                <i>
                    <ImLoop />
                </i>
            </div>
        </div>
    );
}

export default PlayerControls;
