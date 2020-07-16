import React from "react";
import "./SearchBar.css";
import {FaTimes} from "react-icons/fa"

const SearchBar = () => {
    return (
        <div className="search-bar-wrapper">
            <div className="search-box">
                <input type="text" placeholder="Search..." className="input-search"/>
                <div className="input-clear">
                    <FaTimes />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;

