import { useState } from "react";

import { AboutApp } from "../../components/AboutApp/AboutApp.jsx";
import { Emergency } from "../../components/Emergency/Emergency.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { MapLegend } from "../../components/MapLegend/MapLegend.jsx";
import { ResourceCard } from "../../components/ResourceCard/ResourceCard.jsx";
import { ResourceMap } from "../../components/ResourceMap/ResourceMap.jsx";
import { SearchBar } from "../../components/SearchBar/SearchBar.jsx";
import { NavBar } from "../../components/NavBar/NavBar.jsx";

import "./HomePage.scss";

export function HomePage() {

    const [selectedMarker, setSelectedMarker] = useState(null);
    const [markerInfo, setMarkerInfo] = useState(null);

    const handMarkerClick = (marker) => {
        setSelectedMarker(marker);
        setMarkerInfo(marker);
    };

    return (
        <section className="landing">
            <main className="landing__main">
                <section className="landing__sidebar">
                    <div className="landing__sidebar--padded">
                        <Header />
                        <AboutApp />
                        <SearchBar />
                    </div>
                    <NavBar />
                </section>
                <section className="landing__map">
                    <ResourceMap 
                        selectedMarker={selectedMarker}
                        onMarkerClick={handMarkerClick}
                    />
                </section>
                <section className="landing__resource">
                    <ResourceCard 
                        markerInfo={markerInfo}
                        />
                    <Emergency />
                    <MapLegend />
                </section>
            </main>
        </section>
    )
}