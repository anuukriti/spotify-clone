import React, { useEffect } from "react";
import "../styles/Playlist.css";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constant";

function Playlist() {
    const [{ token, playlists }, dispatch] = useStateProvider();
    // console.log("playlist " playlists)
    useEffect(() => {
        const getPlaylistData = async () => {
            const response = await axios.get(
                "https://api.spotify.com/v1/me/playlists",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                }
            );
            // console.log("response: ", response);
            const { items } = response.data;
            const playlists = items.map(({ name, id }) => {
                return { name, id };
            });
            console.log("playlist", playlists);
            dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
        };
        getPlaylistData();
    }, [token, dispatch]);

    const changeCurrentPlaylist = (selectedPlaylistId) => {
        console.log("selectedPlaylistId: ", selectedPlaylistId);
        dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
    };

    return (
        <div className="playlist">
            <h5 className="title">Playlist</h5>
            <div className="menuPlaylist">
                <ul>
                    {playlists.map(({ name, id }) => {
                        return (
                            <li
                                key={id}
                                onClick={() => changeCurrentPlaylist(id)}
                            >
                                {name}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Playlist;
