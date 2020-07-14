import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
    return (
        <div className="search-bar-wrapper">
            <div className="search-box">
                <input type="text" placeholder="Search..." className="input-search"/>
                <div> x </div>
            </div>
        </div>
    );
}

export default SearchBar;

