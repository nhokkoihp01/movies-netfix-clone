import React from 'react';
import SearchMovies from '../search_movies/SearchMovies';
import MovieDetail from "../movie_detail/MovieDetail";
import {useSelector} from "react-redux";

function Search(props) {
    const {DetailMovie} = useSelector(state => state.infoMovies);
    return (
        <div>
            <SearchMovies/>
            <MovieDetail showModal={DetailMovie ? true : false} movie={DetailMovie}/>
        </div>
    );
}

export default Search;