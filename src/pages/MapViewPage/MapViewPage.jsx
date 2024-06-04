// import { useState } from "react";

import { AboutApp } from "../../components/AboutApp/AboutApp.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { ResourceCard } from "../../components/ResourceCard/ResourceCard.jsx";
import { ResourceMap } from "../../components/ResourceMap/ResourceMap.jsx";
import { ResourceModal } from "../../components/ResourceModal/ResourceModal.jsx";
import { SearchBar } from "../../components/SearchBar/SearchBar.jsx";
import { NavBar } from "../../components/NavBar/NavBar.jsx";

import "./MapViewPage.scss";

export function MapViewPage({
    resourceList,
    selectedMarker,
    onMarkerClick,
    markerInfo
    }) {

    // const [selectedMarker, setSelectedMarker] = useState(null);
    // const [markerInfo, setMarkerInfo] = useState(null);

    // const handMarkerClick = (marker) => {
    //     setSelectedMarker(marker);
    //     const clickedResource = marker ? resourceList.find(resource => resource.id === marker.id) : null;
    //     setMarkerInfo(clickedResource);
    // };

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
                    <ResourceMap
                        resourceList={resourceList}
                        selectedMarker={selectedMarker}
                        onMarkerClick={onMarkerClick}
                    />
                </section>
                <section className="map-page__resource">
                    <ResourceCard markerInfo={markerInfo} />
                    {/* <ResourceModal /> */}
                </section>
                <h2 className="map-page--hide">Page under construction</h2>
            </main>
        </section>
    )
}