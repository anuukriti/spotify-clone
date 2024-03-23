import React from "react";
import "../styles/Login.css";

function Login() {
    const handleClick = () => {
        const clientId = "e062e771f35d459f9995f611ce021062";
        // const clientId = "80d0dfe09f0544b0b4de061ce8a0988b";
        const redirectUri = "http://localhost:3000";
        const apiUrl = "https://accounts.spotify.com/authorize";
        const scopes = [
            "user-read-email",
            "user-read-private",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-read-playback-position",
            "user-top-read",
        ];

        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
            "%20"
        )}&response_type=token&show_dialog=true`;
    };

    return (
        <div className="login">
            <img
                width="350"
                height="350"
                src="https://img.icons8.com/3d-fluency/375/spotify.png"
                alt="spotify"
            />
            <h1>Spotify Clone</h1>
            <button onClick={handleClick}>LOGIN WITH SPOTIFY</button>
        </div>
    );
}

export default Login;
