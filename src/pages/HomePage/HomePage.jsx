
import { Header } from "../../components/Header/Header.jsx";
import { AboutApp } from "../../components/AboutApp/AboutApp.jsx";
import { SearchBar } from "../../components/SearchBar/SearchBar.jsx";
import { NavBar } from "../../components/NavBar/NavBar.jsx";

import qhhLogo from "../../assets/logo/e5.png";

import "./HomePage.scss";

export function HomePage() {
    return (
        <section className="landing">
            <Header className="landing__header"/>
            <AboutApp className="landing__about" />
            <div className="landing__search">
                <SearchBar />
                <img className="landing__logo" src={qhhLogo} alt="" />
            </div>
            <NavBar />
        </section>
    );
}