import React from "react";
import "../styles/NavBar.css";
import { FcSearch } from "react-icons/fc";
import { RxAvatar } from "react-icons/rx";
import { useStateProvider } from "../utils/StateProvider";
function NavBar() {
    const [{ userInfo }] = useStateProvider();
    // console.log(userInfo);

    return (
        <div className="navBar">
            <div className="searchBar">
                <input type="text" placeholder="Search..." />
                <i>
                    <FcSearch />
                </i>
            </div>

            <div className="avatar">
                <a href="#">
                    <i>
                        <RxAvatar />
                    </i>
                    <span>{userInfo?.name}</span>
                </a>
            </div>
        </div>
    );
}

export default NavBar;
