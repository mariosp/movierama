import React, {useEffect, useState} from "react";
import "./MovieList.css";
import {getNowPlaying} from "../../Shared/api/api";
import MovieItem from "./MovieItem/MovieItem";
import useScroll from "../../Shared/hooks/useScroll";
import {AiOutlineLoading3Quarters} from "react-icons/all";

const MovieList = ({fetchedMovies, genres}) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1)

    useEffect(()=>{
        setIsFetching(true)
    },[])

    const fetchMovies = async () => {
        if(page <= totalPage) {
            const response = await getNowPlaying(page)
            setTotalPage(response.total_pages);
            setMovies(prevState => [...prevState, ...response.results]);
            setPage(response.page + 1);
            setIsFetching(false);
        } else {
            setIsFetching(false);
        }
    }

    const [isFetching, setIsFetching] = useScroll(fetchMovies);

    const renderedMovieList = movies.length && genres.length && movies.map(movie => {
        movie.genre_string = movie.genre_ids.map(id => {
            for(const genre of genres ) {
                if(genre.id === id) {
                    return genre.name;
                }
            }
        });
        movie.genre_Tostring = movie.genre_string.join('-');

        return  <div id={movie.id}>
                    <MovieItem movie={movie}/>
                </div>
    });

    return (
        <>
            <div className="movie-list-wrapper">
                {renderedMovieList}
            </div>
            {
            isFetching &&
            <div className="movie-list-loading-div">
                <img
                    className="movie-list-loading"
                    src={process.env.PUBLIC_URL + '/images/loading.svg'}
                    alt="loading bar"
                />
            </div>
            }
        </>
    );
}

export default MovieList;