import { BackToTopButton } from "../../components/BackToTopButton/BackToTopButton.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { NavBar } from "../../components/NavBar/NavBar.jsx";
import { ResourceCard } from "../../components/ResourceCard/ResourceCard.jsx";
import { ResourceMap } from "../../components/ResourceMap/ResourceMap.jsx";
// import { SearchBar } from "../../components/SearchBar/SearchBar.jsx";

import "./MapViewPage.scss";

export function MapViewPage({
    resourceList,
    selectedMarker,
    onMarkerClick,
    markerInfo,
    servicesList
    }) {

    return (
        <section className="map-page">
            <main className="map-page__main">
                <section className="map-page__sidebar">
                    <div className="map-page__sidebar--padded">
                        <Header />
                    {/* <SearchBar /> */}
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
                    <ResourceCard 
                        markerInfo={markerInfo}
                        servicesList={servicesList}
                    />
                </section>
                <h2 className="map-page--hide">To view map on desktop, please go to home page</h2>
            </main>
            <BackToTopButton />
        </section>
    )
}