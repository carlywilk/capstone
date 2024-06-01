
import { Header } from "../../components/Header/Header.jsx";
import { NavBar } from "../../components/NavBar/NavBar.jsx";
import { ResourceMap } from "../../components/ResourceMap/ResourceMap.jsx";
// import { Sidebar } from "../../components/Sidebar/Sidebar.jsx";

import "./MapViewPage.scss";

export function MapViewPage() {
    return (
        <>
            <section className="map-page">
                <div className="map-page__header-mobile">
                    <Header />
                </div>
                <ResourceMap />
            </section>
            <section className="map-page__nav-mobile">
                <NavBar />
            </section>
        </>
    );
}