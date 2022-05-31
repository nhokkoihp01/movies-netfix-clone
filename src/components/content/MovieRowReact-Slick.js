import React, {Component, useRef, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../../assets/images/movies/movies.jpg'
import styled from 'styled-components'
import {IoIosArrowBack} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';
import MovieReactModal from "../movie_detail/MovieReactModal";
import Modal from "react-modal";
import Background from "../../assets/images/background2.jpg";
import {useDispatch, useSelector} from "react-redux";
import {setMovieDetail} from "../store/action";

// function PrevArrow(props) {
//     const {className, style, onClick} = props;
//     return (
//         <div
//             className='slider-prev isNeftlix'
//             onClick={onClick}
//         >
//             <IoIosArrowBack className="arrow-btn "/>
//         </div>
//     );
// }

// function NextArrow(props) {
//     const {className, style, onClick} = props;
//     return (
//         <div
//             className="slider-next"
//             onClick={onClick}
//         >
//             <IoIosArrowForward className="arrow-btn "/>
//         </div>
//     );
// }

function MovieRowReactSlick(props) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow/>,
        // className={`slider-prev ${isNeftlix && 'isNeftlix'}`}
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const {movies, title, isNeftlix, idSection,detail} = props
    const [sliderRef, setSliderRef] = useState(null);
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    let {DetailMovie} = useSelector(state => state.infoMovies)
    const dispatch = useDispatch();
    const handleSetMovie = (movie) => {
        dispatch(setMovieDetail(movie))
    }
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const customStyles = {
        content: {
            position: 'fixed',
            width: '100%',
            top: ' 25%',
            left: 0,
            height: '60%',
            margin: '0 auto',
            boxShadow: '0 15px 40px rgba(var(--dark-color), 0.2)',
            transition: ' opacity 2000ms ease-in-out',
            backgroundImage: `url(${Background})`,
            backgroundSize:'cover',
            overflowY:'hidden',
            borderRadius:'12px',
            border:'1px solid #fff',

        },
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 10
        },


    };





    return (
        <MoviesRowContainer id={idSection}>
            <h2 className="movieHeading"> {title}</h2>
            <div style={{position: "relative", marginTop: "2rem"}} className="grid ">
                <MovieSlider>
                    <Slider ref={setSliderRef} {...settings}>
                        {movies && movies.length > 0 && movies.map((movie, index) => {
                            if (movie.poster_path && movie.backdrop_path != null) {
                                let imageUrl = isNeftlix
                                    ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                                    : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                                return (
                                    <div key={index}
                                         className="movieItem"
                                         onClick={handleSetMovie}
                                    >
                                        <img className={`movieImage ${isNeftlix && 'isNeftlix'}`} src={imageUrl} alt=""/>
                                        <div className="movieTitle">
                                            <h4>{movie.title || movie.name}</h4>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </Slider>
                </MovieSlider>
                <div className={`btnLeft ${isNeftlix && 'isNeftlix'}`} onClick={sliderRef?.slickPrev}>
                    <IoIosArrowBack/>
                </div>
                <div className={`btnRight ${isNeftlix && 'isNeftlix'}`} onClick={sliderRef?.slickNext}>
                    <IoIosArrowForward/>
                </div>

                {/*Modal*/}
                <Modal

                    isOpen={modalIsOpen}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    ariaHideApp={false}
                    closeTimeoutMS={200}
                    style={customStyles}
                    contentLabel="modal"
                >
                    <div className="container"
                    >
                        <div className="movieInfo">
                            <h1 className="movieTitle">{detail && (detail.name || detail.title)}</h1>
                            <p className="statistical">
                                <span className="rating">Rating 82%</span>
                                <span className="popularity">popularity 1723.315</span>
                            </p>
                            <p className="releaseDate">Release date: 21/2/2022</p>
                            <p className="runTime">Run time:12345</p>
                            <p className="overview">
                                Diamlorem hymenaeos fugit? Incidunt alias, hendrerit consequuntur cumque, eos sociosqu
                                corrupti quibusdam, dolorem in ligula Diamlorem hymenaeos fugit? Incidunt alias, hendrerit consequuntur cumque, eos sociosqu
                                corrupti quibusdam, dolorem in ligula
                            </p>
                        </div>
                    </div>

                </Modal>
            </div>

        </MoviesRowContainer>
    )
}


const MoviesRowContainer = styled.div`
  background-color: var(--background-color);
  transition: all 0.3s linear;


  .movieHeading {
    color: var(--while-color);
    padding-left: 12px;
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
    transform: translateY(-50%) !important;
    right: 30px;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: 2;
    border-radius: 4px;
    transform: scale(1);

    svg {
      font-size: 4rem;
      opacity: 0.7;
      transition: all 0.3s linear;
      color: var(--while-color);
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

  .btnRight {
    width: 40px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%) !important;
    right: 30px;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: 2;
    border-radius: 4px;
    transform: scale(1);

    svg {
      font-size: 4rem;
      opacity: 0.7;
      transition: all 0.3s linear;
      color: var(--while-color);
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

const MovieSlider = styled.div`
  scroll-behavior: smooth;
  transition: all 0.3s linear;


  &:hover .movieItem {
    opacity: 0.5;
  }

  .movieItem {
    padding: 12px;
    transform: scale(1);
    cursor: pointer;
    width: 100%;
    border-radius: 6px;
    transition: all 0.3s linear;
    position: relative;

    &:hover {
      transform: scale(1.1);
      opacity: 1;
    }

    .movieImage {
      width: 100%;
      height: 250px;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      &.isNeftlix{
        height: 400px;
      }
     
    }


    .movieTitle {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.65);
      width: 100%;
      bottom: 0;
      right: 0;
      left: 12px;
      margin-top: 0;

      h4 {
        padding: 4px;
        color: var(--while-color);
        font-size: 1.6rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        line-height: 1.6rem;
        overflow: hidden;
      }
    }
  }

  .slider-prev {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 70px;
    top: 50%;
    left: 30px;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.65);
    transform: translateY(-50%);

    .arrow-btn {
      cursor: pointer;
      color: var(--while-color);
      font-size: 6rem;
    }

    &.isNeftlix {
      width: 40px;
      height: 50px;
    }
  }

  .slider-next {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 70px;
    top: 50%;
    right: 30px;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.65);
    transform: translate(0, -50%);

    .arrow-btn {
      cursor: pointer;
      color: var(--while-color);
      font-size: 6rem;
    }
  }
`;

export default MovieRowReactSlick;