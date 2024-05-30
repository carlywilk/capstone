
import { Header } from "../../components/Header/Header.jsx";
import { AboutApp } from "../../components/AboutApp/AboutApp.jsx";
import { SearchBar } from "../../components/SearchBar/SearchBar.jsx";
import { NavBar } from "../../components/NavBar/NavBar.jsx";

import qhhLogo from "../../assets/logo/e5.png";

import "./HomePage.scss";

export function HomePage() {
    return (
        <section className="landing">
            <Header />
            <AboutApp />
            <SearchBar />
            <img className="landing__logo" src={qhhLogo} alt="" />
            <NavBar />
        </section>
    );
}