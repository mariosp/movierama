import React from "react";
import "./TopBar.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";

const TopBar = ({handleInputChange}) => {
    return (
        <div className="top-bar-wrapper">
            <Logo />
            <SearchBar handleInputChange={handleInputChange}/>
        </div>
    );
}

export default TopBar;