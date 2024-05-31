
import { Header } from "../../components/Header/Header";
import { NavBar } from "../../components/NavBar/NavBar";

import "./AboutPage.scss";

export function AboutPage() {
    return (
        <>
            <section className="about-page">
                <Header />
                <div className="about-page__creator-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo reprehenderit excepturi tenetur maiores voluptatem ullam architecto? Ut, nesciunt libero! Sunt, iste impedit? Veniam, non distinctio repellat aut numquam itaque adipisci!</div>
                <div className="about-page__emergency">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            </section>
            <NavBar />
        </>
    );
}