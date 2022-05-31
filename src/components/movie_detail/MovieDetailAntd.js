import React, {useState} from 'react';
import {Button} from "antd";
import styled, {keyframes} from 'styled-components'
import Modal from "antd/es/modal/Modal";
import './MovieDetail.css'
import Background from '../../assets/images/background2.jpg';

function MovieDetailAntd(props) {
    const [visible, setVisible] = useState(false);
    const showModal = true;
    return (
        <MovieContainer>
            <Button type="primary" onClick={() => setVisible(true)}>
                Open Modal of 1000px width
            </Button>
            <MovieModalAntd
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                closable={true}
                footer={null}
                className={`${!visible ? 'showModal' : 'hideModal'}`}
            >
                <div className="container"
                     style={{
                         backgroundImage: `url(${Background})`,
                         backgroundSize: 'cover'
                     }}

                >
                    <div className="movieInfo">
                        <h1 className="movieTitle">The witcher</h1>
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
            </MovieModalAntd>
        </MovieContainer>
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

const StyledButton = styled(Button)`

`;
const MovieContainer = styled.div`
  background-color: var(--background-color);

`;

const MovieModalAntd = styled(Modal)`
  .ant-modal-mask{
    animation: ${fadeIn} 1s cubic-bezier(0.17,0.85,0.45,1)!important;
  }
  .ant-modal-body {
    padding: 0 !important;
    overflow-y: hidden !important;
  }
  .container{
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.94) 60%), transparent !important;
    overflow: hidden;

    .movieInfo{
      width: 60%;
      height: 100%;
      padding-left: 24px;
      box-shadow: 0 15px 40px rgba(var(--dark-color), 0.2);
      transition: all 0.3s linear;
    }
    .movieTitle{
      font-size: 3.8rem;
      color: var(--while-color);

    }
    .statistical{
      display: flex;
      align-items: center;

      .rating{
        color: var(--green-color);
        font-size: 1.8rem;
        margin-right: 14px;
      }
      .popularity{
        color: #A99F0D;
        font-size: 1.8rem;

      }

    }
    .releaseDate, .runTime{
      font-size: 1.8rem;
      color: var(--while-color);


    }
    .overview{
      font-size: 1.6rem;
      color: rgba(255,255,255,0.6);

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

export default MovieDetailAntd;