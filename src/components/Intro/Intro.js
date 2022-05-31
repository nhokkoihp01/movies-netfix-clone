import ReactPlayer from "react-player";
import {VscMute, VscUnmute} from 'react-icons/vsc'
import styled from 'styled-components'
import {useState} from "react";

function Intro(props) {
    const [isMuted, setIsMuted] = useState(true);
    return (
        <IntroContainer>
            <ReactPlayer
                playing={true}
                width="100%"
                height="100%"
                loop={true}
                volume={1}
                muted={isMuted}
                url="https://vimeo.com/273686020"
                className="videoIntro"
            />
            <div className="infoIntro">
                <h1 className="headingIntro">NETFLIX The Rain</h1>
                <p className="overviewIntro">Production: Fox Devil Films GmbH for Netflix Amsterdam
                    Director: Simon Ritzler
                    Dop: Carlo Jelavic
                    Editor: Michael Timmers
                    Colorist: Mike Bothe
                    Compositing: Stathis Nafpliotis</p>
            </div>
            {
                isMuted ? (
                    <VscMute className="btnVolume"
                             onClick={() => setIsMuted(prevState => !prevState)}
                    />
                ) : (<VscUnmute className="btnVolume"
                                onClick={() => setIsMuted(prevState => !prevState)}/>)
            }
            <div className="fadeBottom"></div>

        </IntroContainer>
    )
}

export default Intro;

const IntroContainer = styled.div`
  background-color: var(--background-color);
  position: relative;
  color: var(--while-color);
  padding-top: 50%;
  @media only screen and (max-width: 600px) {
    padding-top: 100%;
  }
  .videoIntro {
    position: absolute;
    top: 0;
    left: 0;
  }

  .infoIntro {
    position: absolute;
    top: 140px;
    left: 60px;
    @media only screen and (min-width: 1025px) {
      left: 75px;
    }
    @media only screen and (max-width: 800px) {
      top: 120px;
      left: 40px;
    }
    @media only screen and (max-width: 600px) {
      top: 160px;
      left: 35px;
    }

    .headingIntro {
      color: var(--while-color);
      font-size: 6rem;
      transition: all 0.3s ease;
      @media only screen and (max-width: 800px) {
        font-size: 4rem;
      }
      @media only screen and (max-width: 600px) {
        font-size: 2.4rem;
      }
    }

    .overviewIntro {
      max-width: 550px;
      width: 100%;
      font-size: 2rem;
      line-height: 1.3;
      padding-top: 24px;
      @media only screen and (max-width: 800px) {
        font-size: 1.8rem;
      }
      @media only screen and (max-width: 600px) {
        font-size: 1.4rem;
      }
    }
  }

  .btnVolume {
    position: absolute;
    padding: 6px;
    width: 40px;
    height: 40px;
    top: 50%;
    right: 10%;
    cursor: pointer;
    color: #bbb;
    border: 1px solid var(--while-color);
    border-radius: 50%;
    transition: all 0.3s ease;
    transform: scale(1);

    &:hover {
      color: var(--while-color);
      transform: scale(1.2);
      background-color: rgba(211, 211, 211, 0.18);
    }

    @media only screen and (max-width: 800px) {
      width: 30px;
      height: 30px;
      padding: 4px;
    }
    @media only screen and (max-width: 600px) {
      width: 25px;
      padding: 1px;
      height: 25px;
    }
  }

  .fadeBottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(180deg,transparent, rgba(15,15,15,0.6) 40%, rgb(17,17,17),rgb(17,17,17));
  }


`;