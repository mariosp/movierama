import React, {useEffect, useState} from "react";
import "./MovieList.css";
import {getNowPlaying, searchMovie} from "../../Shared/api/api";
import MovieItem from "./MovieItem/MovieItem";
import useScroll from "../../Shared/hooks/useScroll";

const MovieList = ({searchKey, genres, scrollListener}) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1)

    useEffect(()=>{
        setIsFetching(true)
    },[])

    useEffect(()=>{
        if(searchKey !== undefined && searchKey.length !== 0) { //searchMovie
            setPage(1);
            setIsFetching(true);
        }
    },[searchKey])

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

    const searchMovies = async () => {
        const response = await searchMovie(searchKey, page);
        if(response.page === 1) {
            setTotalPage(response.total_pages);
            setMovies([...response.results]);
            setPage(response.page + 1);
            setIsFetching(false);
            return;
        }

        if(response.page <= response.total_pages) {
            setMovies(prevState => [...prevState, ...response.results]);
            setPage(response.page + 1);
            setIsFetching(false);
        } else {
            setIsFetching(false);
        }
    }

    const fetchMode = () => {
        if(searchKey !== undefined && searchKey.length !== 0){
            return searchMovies;
        }
        if (searchKey === undefined) {
            return fetchMovies;
        }
    }

    const [isFetching, setIsFetching] = useScroll(fetchMode());

    const renderedMovieList = !!movies.length && genres.length && movies.map(movie => {
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
            isFetching ?
            <div className="movie-list-loading-div">
                <img
                    className="movie-list-loading"
                    src={process.env.PUBLIC_URL + '/images/loading.svg'}
                    alt="loading bar"
                />
            </div>
            :
            null
            }
        </>
    );
}

export default MovieList;