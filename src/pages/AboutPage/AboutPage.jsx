import { AboutApp } from "../../components/AboutApp/AboutApp.jsx";
import { Emergency } from "../../components/Emergency/Emergency.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { SearchBar } from "../../components/SearchBar/SearchBar.jsx";
import { NavBar } from "../../components/NavBar/NavBar.jsx";

import qhhLogo from "../../assets/logo/e5.png";

import "./AboutPage.scss";

export function AboutPage() {
    return (
        <section className="about-page">
            <main className="about-page__main">
                <section className="about-page__sidebar">
                    <div className="about-page__sidebar--padded">
                        <Header />
                        <div className="about-page__sidebar--hide">
                            <AboutApp />
                        </div>
                        <SearchBar />
                    </div>
                    <NavBar />
                </section>
                <section className="about-page__content">
                    <AboutApp />
                    <Emergency />
                    <img className="about-page__logo" src={qhhLogo} alt="letters Q, H, and H writtn in a smooth motion, with the two H characters sharing a middle line" />
                </section>
            </main>
        </section>
    )
}