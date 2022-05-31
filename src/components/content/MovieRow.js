import styled from 'styled-components'
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'
import {useEffect, useRef, useState} from "react";
import {smoothHorizontalScrolling} from '../../utils/index'
import {useViewport} from "../hooks";
import {useDispatch} from "react-redux";
import {setMovieDetail} from "../store/action";


function MovieRow(props) {
    const {movies, title, isNeftlix, idSection} = props;
    const sliderRef = useRef();
    const movieRef = useRef();
    const [dragDown, setDragDown] = useState(0);
    const [dragMove, setDragMove] = useState(0);
    const [isDrag, setIsDrag] = useState(false);
    const [windowWidth] = useViewport();
    const dispatch = useDispatch();
    const handleSetMovie = (movie) => {
        dispatch(setMovieDetail(movie))
    }
    const handleScrollRight = () => {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft < maxScrollLeft) {
            smoothHorizontalScrolling(sliderRef.current,
                250,
                movieRef.current.clientWidth * 2,// muon qua 2 poster thi * 2
                sliderRef.current.scrollLeft)
        }
    }
    const handleScrollLeft = () => {

        if (sliderRef.current.scrollLeft > 0) {
            smoothHorizontalScrolling(sliderRef.current,
                250,
                -movieRef.current.clientWidth * 2,
                sliderRef.current.scrollLeft)
        }
    }
    useEffect(() => {
        if (isDrag) {
            if (dragMove < dragDown) handleScrollRight();
            if (dragMove > dragDown) handleScrollLeft();
        }
    }, [dragDown, dragMove, isDrag]);

    const onDragStart = e => {
        setIsDrag(true);
        setDragDown(e.screenX);
    };
    const onDragEnd = e => {
        setIsDrag(false);
    };
    const onDragEnter = e => {
        setDragMove(e.screenX);
    };
    return (
        <MoviesRowContainer draggable="false" id={idSection}>
            <h1 className="heading">{title}</h1>
            <MoviesSlider ref={sliderRef}
                          draggable="true"
                          onDragStart={onDragStart}
                          onDragEnd={onDragEnd}
                          onDragEnter={onDragEnter}
                          style={
                              movies && movies.length > 0 ? {
                                  gridTemplateColumns: `repeat(${movies.length},
                                 ${windowWidth > 1200 ? '360px'
                                      : windowWidth > 992 ? '300px'
                                          : '250px'
                                  }
                                 )`
                              } : {}

                          }
            >
                {movies && movies.length > 0 && movies.map((movie, index) => {
                        if (movie.poster_path && movie.backdrop_path != null) {
                            let imageUrl = isNeftlix
                                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`

                            return (
                                <div className="movieItem"
                                     key={index}
                                     ref={movieRef}
                                     draggable="false"
                                     onClick={() => handleSetMovie(movie)}
                                >
                                    <img src={imageUrl} draggable="false" alt=""/>
                                    <div className="movieName">{movie.title || movie.name}</div>
                                </div>
                            )
                        }
                    }
                )}
            </MoviesSlider>
            <div className={`btnRight ${isNeftlix && 'isNeftlix'}`} onClick={handleScrollRight}>
                <IoIosArrowForward/>
            </div>
            <div className={`btnLeft ${isNeftlix && 'isNeftlix'}`} onClick={handleScrollLeft}>
                <IoIosArrowBack/>
            </div>

        </MoviesRowContainer>
    )
}


const MoviesRowContainer = styled.div`
  background-color: var(--background-color);
  color: var(--while-color);
  padding: 20px 20px 0 20px;
  position: relative;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;

  .heading {
    font-size: 1.8rem;
    user-select: none;
    color: var(--while-color);
  }

  .btnRight {
    width: 40px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    right: 30px;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: 2;
    border-radius: 4px;
    //font-size: 4rem;
    transform: scale(1);


    svg {
      font-size: 4rem;
      opacity: 0.7;
      transition: all 0.3s linear;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }

    &:hover svg {
      transform: scale(1.1);
      opacity: 1;
    }

    &.isNeftlix {
      width: max-content;
      height: 70px;
    }
  }

  .btnLeft {
    width: 40px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    left: 30px;
    top: 50%;
    transform: translateY(-50%);
    right: 30px;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: 2;
    border-radius: 4px;
    transform: scale(1);

    svg {
      font-size: 4rem;
      opacity: 0.7;
      transition: all 0.3s linear;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }

    &:hover svg {
      transform: scale(1.1);
      opacity: 1;
    }

    &.isNeftlix {
      width: max-content;
      height: 70px;
    }
  }

`;
const MoviesSlider = styled.div`
  display: grid;
  gap: 12px;
  transition: all 0.3s linear;
  user-select: none;
  overflow-y: hidden;
  overflow-x: auto;
  overflow: hidden;
  padding-top: 28px;
  padding-bottom: 28px;
  scroll-behavior: smooth;


  &:hover .movieItem {
    opacity: 0.5;
  }

  .movieItem {
    transform: scale(1);
    //max-width: 400px;
    //max-height: 500px;
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
    user-select: none;
    overflow: hidden;
    border-radius: 6px;
    //transform: center left;
    position: relative;
    cursor: pointer;
    z-index: 1;

    &:hover {
      opacity: 1;
      transform: scale(1.1);
      z-index: 10;
    }

    img {
      width: 100%;
      height: 100%;
    }

    .movieName {
      position: absolute;
      left: 0;
      width: 100%;
      right: 30px;
      bottom: 0;
      text-align: center;
      font-size: 1.4rem;
      background-color: rgba(0, 0, 0, 0.65);
    }
  }

`;

export default MovieRow;