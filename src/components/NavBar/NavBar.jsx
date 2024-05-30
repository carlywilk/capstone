import { Link } from "react-router-dom";
import "./NavBar.scss";

import testIcon from "../../assets/icons/family_star_24dp_FILL0_wght400_GRAD0_opsz24.png"

export function NavBar() {
    return (
        <nav className="nav">
            <Link className="nav__link" to="/about" >
                <img className="nav__button" src="" alt="" />
            </Link>
            <Link className="nav__link" to="/map" >
                <img className="nav__button" src="" alt="" />
            </Link>
            <Link className="nav__link" to="/list" >
                <img className="nav__button" src="" alt="" />
            </Link>
            <Link className="nav__link" to="/" >
                <img className="nav__button" src="" alt="" />
            </Link>
        </nav>
    );
}