import { AboutApp } from "../../components/AboutApp/AboutApp.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { ResourceMap } from "../../components/ResourceMap/ResourceMap.jsx";
import { SearchBar } from "../../components/SearchBar/SearchBar.jsx";
import { NavBar } from "../../components/NavBar/NavBar.jsx";

import "./MapViewPage.scss";

export function MapViewPage() {
    return (
        <section className="map-page">
            <main className="map-page__main">
                <section className="map-page__sidebar">
                    <div className="map-page__sidebar--padded">
                        <Header />
                        <div className="list__sidebar--hide">
                            <AboutApp />
                        </div>
                    <SearchBar />
                    </div>
                    <NavBar />
                </section>
                <section className="map-page__map">
                    <ResourceMap />
                </section>
            </main>
        </section>
    )
}