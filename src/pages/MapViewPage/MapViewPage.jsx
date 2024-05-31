
import { Header } from "../../components/Header/Header.jsx";
import { NavBar } from "../../components/NavBar/NavBar.jsx";

import "./MapViewPage.scss";

export function MapViewPage() {
    return (
        <>
            <section className="map-page">
                <Header />
            </section>
            <NavBar />
        </>
    );
}