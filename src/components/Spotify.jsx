import React, { useEffect } from "react";
import "../styles/Spotify.css";
import LeftMenu from "./LeftMenu";
import MainMenu from "./MainMenu";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constant";

function Spotify() {
    const [{ token }, dispatch] = useStateProvider();

    useEffect(() => {
        const getUserInfo = async () => {
            const { data } = await axios.get("https://api.spotify.com/v1/me", {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            });
            // console.log("data: ", { data });
            const userInfo = {
                userid: data.id,
                userUrl: data.external_urls.spotify,
                name: data.display_name,
            };
            dispatch({ type: reducerCases.SET_USER, userInfo });
        };
        getUserInfo();
    }, [token, dispatch]);

    return (
        <div className="spotify">
            <LeftMenu />
            <MainMenu />
            <div className="background"></div>
        </div>
    );
}

export default Spotify;
