import React, {useEffect, useState} from "react";
import "./MovieItem.css";
import {getRevies, getReviewss, getSimilar, getVideo, imageUrl} from "../../../Shared/api/api";


const MovieItem = ({movie}) => {
    const [onError,setOnError] = useState(false);
    const [expand,setExpand] = useState(false);
    const [video, setVideo] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [similar, setSimilar] = useState([]);
    // let videovar = null;
    // let reviewsvar = null;
    // let similarvar = null;

    useEffect(()=> {
        if (expand) {
            getInfo();
        }
    },[expand])

    const handleExpand = () => {
        setExpand(!expand);
    }

    const getInfo = () => {
        if (expand) {
            getVideo(movie.id).then(res=> {
                console.log(res);
                if(res.results.length) {
                    for(const video of res.results) {
                        if(video.type === "Trailer" && video.site === "YouTube") {
                            setVideo(video.key);
                            break;
                        }

                    }
                }
            });

            getReviewss(movie.id).then(res=> {
                console.log(res);
            })

            getSimilar(movie.id).then(res => {
                console.log(res);
            })
            // setVideo(getVideo(movie.id));
            // setReviews(getReviewss(movie.id));
            // setSimilar(getSimilar(movie.id));
        }
    }

    console.log(video)
    console.log(reviews)
    console.log(similar)

    return (
        <div className={'movie-item-wrapper ' + (expand? 'expand':'no-expand')} onClick={handleExpand}>
            {   !onError?
                <img src={imageUrl + movie.poster_path} alt={movie.title} onError={()=>setOnError(true)}/>
                :
                <div className="movie-item-image-fallback"></div>
            }
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
            {   expand?
                <div className={expand?'expanded': 'no-expanded'}>
                    {
                        video != null ?
                        <iframe className="video-iframe" src={`https://www.youtube.com/embed/${video}`} frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                        :
                        null
                    }
                </div>
                :
                null
            }
        </div>
    );
}
// .substr(0, codeLine.indexOf(" "))
export default MovieItem;