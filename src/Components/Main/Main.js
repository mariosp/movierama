import React, {useEffect, useState} from "react";
import "./Main.css";
import {getGenres} from "../../Shared/api/api";
import MovieList from "../MovieList/MovieList";

const Main = () => {
    const [genres, setGenres] = useState([]);
    useEffect(()=> {
        fetchGenres();
    },[])
    const fetchGenres = async () => {
        const response = await getGenres();
        setGenres(response.genres)
    }

    return (
        <div className="main-wrapper">
            {/*<MovieList fetchedMovies={movies} getMovies={getNowPlayingMovies}/>*/}
            <MovieList genres={genres}/>
        </div>
    )
}

export default Main;