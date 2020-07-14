import React from "react";
import "./TopBar.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";

const TopBar = () => {
    return (
        <div className="top-bar-wrapper">
            <Logo />
            <SearchBar />
        </div>
    );
}

export default TopBar;