import {AiFillHome} from 'react-icons/ai'
import {FaHotjar, FaStar} from 'react-icons/fa'
import {MdTheaterComedy} from 'react-icons/md'
import {
    GiNinjaHeroicStance,
    GiRomanToga,
    GiGhost,
    GiBandageRoll
} from 'react-icons/gi'
import styled from "styled-components";
import MenuItem from "./MenuItem";


function Menu(props) {
    return (
        <MenuPane>
            <MenuItem name="Home" Icon={AiFillHome} to='neftlix'/>
            <MenuItem name="Trending" Icon={FaHotjar} to='trendingMovies'/>
            <MenuItem name="Top rated" Icon={FaStar} to='topRatedMovies'/>
            <MenuItem name="Action Movies" Icon={GiNinjaHeroicStance} to='actionMovies'/>
            <MenuItem name="Comedy movies" Icon={MdTheaterComedy} to='comedyMovies'/>
            <MenuItem name="Horror movies" Icon={GiGhost} to='horrorMovies'/>
            <MenuItem name="Romance movies" Icon={GiRomanToga} to='romanceMovies'/>
            <MenuItem name="Documentaries" Icon={GiBandageRoll} to='documentMovies'/>
        </MenuPane>
    )
}

const MenuPane = styled.div`
  position: fixed;
  left: 0;
  top: 20%;
  width: 46px;
  padding: 4px 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 3;
  display: flex;
  flex-direction: column;
  transform-origin: left center;
  transition: all 0.3s linear;
  overflow: hidden;

  &:hover {
    width: 180px;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .subMenu {
    display: flex;
    align-items: center;
    width: max-content; // tran ra het width 
    margin-left: 2px;
    padding: 4px 6px;
    cursor: pointer;

    .icon {
      font-size: 30px;
      margin-right: 8px;
      color: #E6400C;
    }

    span {
      font-size: 16px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.6);

      &:hover {
        color: var(--while-color);
      }
    }
  }

`;
export default Menu;