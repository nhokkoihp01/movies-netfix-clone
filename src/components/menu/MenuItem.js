import {Link} from 'react-scroll'
import {randomRgbaColor} from "../../utils";

function MenuItem(props) {
    const {name,Icon,to} =props;
    return(
        <Link className="subMenu"
              to={to}
              spy={true}
              smooth={true}
              hashSpy={true}
              activeClass="active"
              offset={-70}
              duration={500}


        >
            <Icon className="icon" style={{color:randomRgbaColor(1)}}/>
            <span>{name}</span>
        </Link>

    )
}
export  default  MenuItem;