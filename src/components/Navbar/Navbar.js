import Logo from '../../assets/images/Netffix-logo.png';
import {BsSearch} from 'react-icons/bs'
import styled from 'styled-components'
import {useEffect, useState} from "react";
import {useScrollY} from "../hooks";
import {useMediaQuery} from 'react-responsive';
import {useNavigate} from "react-router-dom";


function Navbar(props) {
    const [scrollY] = useScrollY();
    const isPC = useMediaQuery({minWidth: 1023})
    const [keywords, setKeywords] = useState('');
    let navigate = useNavigate();
    const handleChangeInput = (e) => {
        let keywords = e.target.value;
        setKeywords(keywords)
        if (keywords.length > 0) {
            navigate(`/search?keywords=${keywords.trim()}`)
        } else {
            navigate('/')
        }
    }
    const goHome = () => {
        navigate('/');
        setKeywords('');
    }


    return (
        <Navigation>
            <div
                style={isPC && scrollY < 50 ? {backgroundColor: 'transparent'} : {backgroundColor: 'var(--background-color)'}}
                className="navContainer">
                <div className="logo" onClick={goHome}>
                    <img src={Logo} alt=""/>
                </div>
                <div className="nav-search">
                    <BsSearch className="icon-search"/>
                    <input type="text"
                           placeholder="Input titles,genres, people"
                           onChange={handleChangeInput}
                           value={keywords}
                    />
                </div>
            </div>
        </Navigation>
    )
}

export default Navbar;

const Navigation = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  transition-timing-function: ease-in;
  transition: all 1s;
  z-index: 9999;
  @media only screen and (max-width: 600px) {
    height: 100px;

  }

  .navContainer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    line-height: 100%;
    height: 100%;
    background-color: transparent;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
      justify-content: flex-start;

    }

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 120px;
      cursor: pointer;
      padding-left: 20px;
      @media only screen and (max-width: 600px) {
        position: relative;
        transform: translateX(0%);
      }

      img {
        width: 100%;
      }
    }

    .nav-search {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 12px;

      &:hover .icon-search {
        color: var(--while-color);
      }

      .icon-search {
        color: var(--while-color);
        cursor: pointer;
        transform: translateX(20px);
        color: #bbb;
      }

      input {
        font-size: 1.4rem;
        border: 1px solid var(--while-color);
        color: var(--while-color);
        outline: none;
        width: 0;
        padding: 10px;
        cursor: pointer;
        opacity: 0;
        background-color: var(--background-color);
        transition: width 0.5s;

        &:focus {
          padding-left: 26px;
          width: 300px;
          cursor: text;
          opacity: 1;
          border-radius: 4px;
        }
      }
    }

    .transparent {
      background-color: transparent;
    }

    .backgroundColor {
      background-color: var(--background-color);
    }
  }





`;