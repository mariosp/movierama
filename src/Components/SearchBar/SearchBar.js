import React, {useEffect, useState} from "react";
import "./SearchBar.css";
import {FaTimes} from "react-icons/fa"

const SearchBar = ({handleInputChange}) => {
    const [search, setSearch] = useState("");

    useEffect(() => {
        handleInputChange(search);
    },[search,handleInputChange])

    const handleChange = (event) => {
        const searchKey = event.target.value.trimStart();
        setSearch(searchKey);
    }

    const reset = () => {
        setSearch("");
    }


    return (
        <div className="search-bar-wrapper">
            <div className="search-box">
                <input type="text"
                       placeholder="Search..."
                       className="input-search"
                       value={search}
                       onChange={(event)=> handleChange(event)}
                />
                <div className="input-clear" onClick={()=> reset()}>
                    <FaTimes />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;

