export default {
    headers: {
        'Authorization': 'bearer ' + process.env.REACT_APP_THE_MOVIE_DB_TOKEN,
        'Content-Type': 'application/json'
    }
}