import React from 'react';
import styled, {keyframes} from "styled-components";
import Background from '../../assets/images/background2.jpg'
import {setMovieDetail} from "../store/action";
import {useDispatch} from "react-redux";
import moment from "moment";

function MovieDetail(props) {
    // const showModal = true;
    const {movie, showModal} = props;
    const dispatch = useDispatch();
    const handleCloseModal = () => {
        dispatch(setMovieDetail(null))
    }

    return (
        <MovieDetailModal>
            <div
                className={`backdrop ${showModal ? 'showBackDrop' : 'hideBackDrop'}`}
                onClick={handleCloseModal}
            ></div>
            <div className={`modal ${showModal ? 'showModal' : 'hideModal'}`}
                 style={movie ? {
                     backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path})`,
                     backgroundSize: 'cover'
                 } : {}}
            >
                <div className="container">
                    <div className="movieInfo">
                        <h1 className="movieTitle">{movie && (movie.name || movie.title)}</h1>
                        <p className="statistical">
                            <span className="rating">Rating: {movie && movie.vote_average * 10}%</span>
                            <span className="popularity">popularity:{movie && movie.popularity}</span>
                        </p>
                        <p className="releaseDate">Release date:
                            {movie && moment(movie.release_date).format('DD/MM/YYYY') }

                        </p>
                        <p className="runTime">Run time: {movie && (movie.runtime || movie.episode_run_time)}</p>
                        <p className="overview">
                            {movie && movie.overview}
                        </p>
                    </div>
                </div>
            </div>

        </MovieDetailModal>
    );
}

const fadeIn = keyframes`
  from {
    background-color: rgba(0, 0, 0, 0);

    100% {
      background: rgba(0, 0, 0, 0.6);

    }

  }
`;

const MovieDetailModal = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100000;
    animation: ${fadeIn} 1s cubic-bezier(0.17, 0.85, 0.45, 1);
    background-color: rgba(0, 0, 0, 0.6);
  }

  .showBackDrop {
    display: block;
  }

  .hideBackDrop {
    display: none;
  }

  .modal {
    position: fixed;
    width: 100%;
    top: 20%;
    left: 0;
    z-index: 100001;
    height: 70%;
    margin: 0 auto;
    box-shadow: 0 15px 40px rgba(var(--dark-color), 0.2);
    transition: 0.3s linear all;
    @media screen and(max-width: 1184px) {
      height: 70%;
    }
    @media screen and(max-width: 600px) {
      height: 80%;

    }

    .container {
      position: relative;
      width: 70%;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.94) 60%), transparent;
      @media screen and(max-width: 1184px) {
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.95) 40%, rgba(0, 0, 0, 0.733)), transparent;
        width: 88%;

      }
      @media screen and(max-width: 980px) {
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.95) 40%, rgba(0, 0, 0, 0.733)), transparent;
        width: 100%;

      }
      @media screen and(max-width: 600px) {
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.88) 60%, rgba(0, 0, 0, 0.733)), transparent;

      }

      .movieInfo {
        width: 65%;
        height: 100%;
        padding-left: 24px;
        color: var(--while-color);
        font-size: 2rem;
        padding-top: 30px;
        @media screen and(max-width: 600px) {
          font-size: 1.6rem;
          width: 80%;

        }

        .movieTitle {
          color: var(--while-color);
          margin-top: 20px;
        }

        .statistical {
          display: flex;
          align-items: center;
          margin-top: 20px;

          .rating {
            color: var(--green-color);
            margin-right: 12px;
            margin-top: 12px;

          }

          .popularity {
            color: darkorange;
            margin-top: 12px;
          }
        }

        .releaseDate, .runTime {
          margin-top: 12px;

        }

        .overview {
          margin-top: 20px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.4;
          font-size: 1.8rem;
          @media screen and(max-width: 600px) {
            font-size: 1.4rem;
          }
        }
      }
    }

  }

  .showModal {
    top: 25%;
    opacity: 1;
    left: 0;
    visibility: visible;
    transition: all 0.3s ease-in-out;
  }

  .hideModal {
    top: 0;
    opacity: 0;
    left: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }
`;

export default MovieDetail;