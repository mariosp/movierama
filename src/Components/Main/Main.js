import React, {useEffect, useState} from "react";
import "./Main.css";
import {getGenres, getNowPlaying} from "../../Shared/api/api";
import MovieList from "../MovieList/MovieList";

const Main = ({searchKey}) => {
    const [genres, setGenres] = useState([]);

    useEffect(()=> {
        fetchGenres();
    },[])

    const fetchGenres = async () => {
        const response = await getGenres();
        setGenres(response.genres)
    }

    return (
        <>
            {
                !(searchKey && searchKey.length) ?
                    <div className={(searchKey && searchKey.length ? 'no-visible' : 'visible') + ' main-wrapper'}>
                        <MovieList genres={genres} scrollListener={!(searchKey && searchKey.length)}/>
                    </div>
                    : null
            }

            {
                (searchKey && searchKey.length) ?
                <div className="main-wrapper">
                    <MovieList genres={genres} searchKey={searchKey}/>
                </div>
                :
                null
            }
        </>
    )
}

export default Main;