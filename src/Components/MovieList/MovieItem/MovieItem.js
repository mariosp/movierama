import React from "react";
import "./MovieItem.css";
import {imageUrl} from "../../../Shared/api/api";


const MovieItem = ({movie}) => {
    return (
        <div className="movie-item-wrapper">
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
            <div className="movie-item-details">
                <div className="movie-item-title">{movie.title}</div>
                <div className="movie-item-release-date">
                    {movie.release_date && movie.release_date.substr(0, movie.release_date.indexOf('-'))}
                </div>
                <div className="movie-item-genre">
                    {movie.genre_Tostring}
                </div>
                <div className="movie-item-vote-average">
                    Vote Avg: {movie.vote_average}
                </div>
                <div className="movie-item-overview">
                    {movie.overview}
                </div>
            </div>
        </div>
    );
}
// .substr(0, codeLine.indexOf(" "))
export default MovieItem;