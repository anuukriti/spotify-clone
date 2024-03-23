import "./App.css";
import React, { useEffect } from "react";
import Login from "./components/Login";
import { useStateProvider } from "./utils/StateProvider";
import { reducerCases } from "./utils/Constant";
import Spotify from "./components/Spotify";

function App() {
    const [{ token }, dispatch] = useStateProvider();

    useEffect(() => {
        const hash = window.location.hash;
        // const _token = hash.access_token;

        if (hash) {
            const token = hash.substring(1).split("&")[0].split("=")[1];
            // console.log("token: ", token);

            dispatch({ type: reducerCases.SET_TOKEN, token });
        }
    }, [token, dispatch]);

    return (
        <div className="App">
            <div>{token ? <Spotify /> : <Login />}</div>
            {/* <Spotify /> */}
        </div>
    );
}

export default App;
