import { Link } from "react-router-dom";

import accountIcon from "../../assets/icons/account_circle_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import dbIcon from "../../assets/icons/database_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import globeIcon from "../../assets/icons/globe_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import homeIcon from "../../assets/icons/home_24dp_FILL0_wght400_GRAD0_opsz24.svg";

import "./HomeNav.scss";

export function HomeNav() {
    return (
        <section className="home-nav">
            <section className="home-nav--rowOne">
                <div className="home-nav__button home-nav--hide">
                    <h3 className="home-nav__subtitle">Map View</h3>
                    <Link className="home-nav__link" to="/map" >
                        <img className="home-nav__icon" src={globeIcon} alt="" />
                    </Link>
                </div>
                <div className="home-nav__button">
                    <h3 className="home-nav__subtitle">List View</h3>
                    <Link className="home-nav__link" to="/list" >
                        <img className="home-nav__icon" src={dbIcon} alt="" />
                    </Link>
                </div>
            </section>
            <section className="home-nav--rowTwo">
                <div className="home-nav__button">
                    <h3 className="home-nav__subtitle">Profile</h3>
                    <Link className="home-nav__link" to="/user">
                        <img className="home-nav__icon" src={accountIcon} alt="" />
                    </Link>
                </div>
                <div className="home-nav__button">
                    <h3 className="home-nav__subtitle">Home Page</h3>
                    <Link className="home-nav__link" to="/" >
                        <img className="home-nav__icon" src={homeIcon} alt="" />
                    </Link>
                </div>
            </section>
        </section>
    );
}