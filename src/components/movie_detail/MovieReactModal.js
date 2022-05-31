import React from 'react';
import Modal from 'react-modal';
import './MovieDetail.css';
import styled from 'styled-components'
import Background from "../../assets/images/background2.jpg";
import {motion} from "framer-motion";
import {useDispatch} from "react-redux";
import {setMovieDetail} from "../store/action";

function MovieReactModal(props) {
    const {movie} = props;
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    const dispatch = useDispatch();
    const handleCloseModal = () => {
        dispatch(setMovieDetail(null))
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
        <div>
            <button  onClick={openModal}>Open Modal</button>
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
                       <div className="movieInfo" >
                           <h1 className="movieTitle">The witch</h1>
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
    );
}



export default MovieReactModal;