import { BackToTopButton } from "../../components/BackToTopButton/BackToTopButton";
import { Header } from "../../components/Header/Header";
import { HomeNav } from "../../components/HomeNav/HomeNav";
import { NavBar } from "../../components/NavBar/NavBar";
// import { SearchBar } from "../../components/SearchBar/SearchBar";

import "./UserPage.scss";

export function UserPage() {
    return (
        <section className="user">
            <main className="user__main">
                <section className="user__sidebar">
                    <div className="user__sidebar--padded">
                        <Header />
                        {/* <SearchBar /> */}
                    </div>
                <section className="user__home-nav">
                    <HomeNav />
                </section>
                </section>
                <section className="user__content">
                    <h3 className="user__subtitle">User profiles feature coming soon...</h3>
                </section>
            </main>
            <div className="user__nav-bar">
                <NavBar />
            </div>
            <BackToTopButton />
        </section>
    );
}