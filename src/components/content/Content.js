import React, {useEffect} from 'react';
import MovieRow from "./MovieRow";
import MovieRowReactSlick from "./MovieRowReact-Slick";
import {useDispatch, useSelector} from "react-redux";
import * as ACTIONS from "../store/action";
import {FaArrowAltCircleUp} from "react-icons/fa";
import styled from "styled-components";
import {animateScroll as scroll} from 'react-scroll';
import {useScrollY} from "../hooks";



const ScrollToTop = () => {
    scroll.scrollToTop();
}

function Content(props) {
    const dispatch = useDispatch();
    const [scrollY] = useScrollY();
    let {DetailMovie} = useSelector(state => state.infoMovies)
    const {
        NeftlixOriginals,
        TrendingMovies,
        TopRatedMovies,
        ActionMovies,
        ComedyMovies,
        HorrorMovies,
        RomanceMovies,
        DocumentMovies
    } = useSelector(state => state.infoMovies);

    useEffect(() => {
        dispatch(ACTIONS.getNeftlixOriginals());
        dispatch(ACTIONS.getTrendingMovies());
        dispatch(ACTIONS.getTopRatedMovies());
        dispatch(ACTIONS.getActionMovies());
        dispatch(ACTIONS.getComedyMovies());
        dispatch(ACTIONS.getHorrorMovies());
        dispatch(ACTIONS.getRomanceMovies());
        dispatch(ACTIONS.getDocumentariesMovies());
    }, [dispatch]);
    return (
        <div>

            {/*<MovieRowReactSlick detail={DetailMovie} movies={NeftlixOriginals} title="Netflix Originals" isNeftlix={true} idSection='neftlix'/>*/}
            {/*<MovieRowReactSlick movies={TrendingMovies} title="Trending Movies" idSection='trendingMovies'/>*/}
            {/*<MovieRowReactSlick movies={TopRatedMovies} title="Top rate movies" idSection='topRatedMovies'/>*/}
            {/*<MovieRowReactSlick movies={ActionMovies} title="Action movies" idSection='actionMovies'/>*/}
            {/*<MovieRowReactSlick movies={ComedyMovies} title="Comedy movies" idSection='comedyMovies'/>*/}
            {/*<MovieRowReactSlick movies={HorrorMovies} title="Horror movies" idSection='horrorMovies'/>*/}
            {/*<MovieRowReactSlick movies={RomanceMovies} title="Romance movies" idSection='romanceMovies'/>*/}
            {/*<MovieRowReactSlick movies={DocumentMovies} title="Documentaries movies" idSection='documentMovies'/>*/}


            <MovieRow movies={NeftlixOriginals} title="Netflix Originals" isNeftlix={true} idSection='neftlix'/>
            <MovieRow movies={TrendingMovies} title="Trending Movies"  idSection='trendingMovies'/>
            <MovieRow movies={TopRatedMovies} title="Top rate movies" idSection='topRatedMovies'/>
            <MovieRow movies={ActionMovies} title="Action movies" idSection='actionMovies'/>
            <MovieRow movies={ComedyMovies} title="Comedy movies" idSection='comedyMovies'/>
            <MovieRow movies={HorrorMovies} title="Horror movies" idSection='horrorMovies'/>
            <MovieRow movies={RomanceMovies} title="Romance movies" idSection='romanceMovies'/>
            <MovieRow movies={DocumentMovies} title="Documentaries movies" idSection='documentMovies'/>
            <GoToTop onClick={() => ScrollToTop()}
                     style={{visibility: `${scrollY > 600 ? 'visible' : 'hidden'}`}}
            >
                <FaArrowAltCircleUp/>
            </GoToTop>
        </div>
    );
}

const GoToTop = styled.div`
  position: fixed;
  z-index: 99999;
  right: 70px;
  bottom: 50px;
  font-size: 5rem;
  color: rgba(255, 255, 255, 0.4);
  transition: all 0.3s linear;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  @media screen and (max-width: 600px) {
    right: 40px;
  }

`;

export default Content;