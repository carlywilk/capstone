import { Link } from "react-router-dom";

import "./NavBar.scss";

import accountIcon from "../../assets/icons/account_circle_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import dbIcon from "../../assets/icons/database_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import globeIcon from "../../assets/icons/globe_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import homeIcon from "../../assets/icons/home_24dp_FILL0_wght400_GRAD0_opsz24.svg";

export function NavBar() {
    return (
        <nav className="nav">
            <Link className="nav__link" to="/map" >
                <img className="nav__button" src={globeIcon} alt="" />
            </Link>
            <Link className="nav__link" to="/list" >
                <img className="nav__button" src={dbIcon} alt="" />
            </Link>
            <Link className="nav__link" to="/user" >
                <img className="nav__button" src={accountIcon} alt="" />
            </Link>
            <Link className="nav__link" to="/" >
                <img className="nav__button" src={homeIcon} alt="" />
            </Link>
        </nav>
    );
}