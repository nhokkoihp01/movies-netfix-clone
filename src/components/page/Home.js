import React, {useEffect, useState} from 'react';
import Intro from "../Intro/Intro";
import Content from "../content/Content";
import Menu from "../menu/Menu";
import MovieDetail from "../movie_detail/MovieDetail";
import {useSelector} from "react-redux";

function Home(props) {
    let {DetailMovie} = useSelector(state => state.infoMovies);
    const [isShowMovieDetail, setISShowMovieDetail] = useState(false);

    useEffect(() => {
        setISShowMovieDetail(DetailMovie ? true : false);
    }, [DetailMovie])

    return (
        <div>
            <Intro/>
            <Content/>
            <Menu/>
            <MovieDetail movie={DetailMovie} showModal={isShowMovieDetail}/>
        </div>
    );
}

export default Home;