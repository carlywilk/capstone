
import { AboutApp } from "../../components/AboutApp/AboutApp.jsx";
import { Emergency } from "../../components/Emergency/Emergency.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { ResourceCard } from "../../components/ResourceCard/ResourceCard.jsx";
import { ResourceMap } from "../../components/ResourceMap/ResourceMap.jsx";
import { SearchBar } from "../../components/SearchBar/SearchBar.jsx";
import { NavBar } from "../../components/NavBar/NavBar.jsx";

import "./HomePage.scss";

export function HomePage({
    resourceList,
    selectedMarker,
    onMarkerClick,
    markerInfo,
    servicesList
    }) {

    return (
        <section className="landing">
            <main className="landing__main">
                <section className="landing__sidebar">
                    <div className="landing__sidebar--padded">
                        <Header />
                        <AboutApp />
                        <SearchBar />
                    </div>
                    <div className="landing__sidebar--hide">
                        <NavBar />
                    </div>
                </section>
                <section className="landing__map">
                    <ResourceMap 
                        resourceList={resourceList}
                        selectedMarker={selectedMarker}
                        onMarkerClick={onMarkerClick}
                    />
                </section>
                <section className="landing__resource">
                    <ResourceCard 
                        markerInfo={markerInfo}
                        servicesList={servicesList}
                        />
                    <Emergency />
                </section>
            </main>
        </section>
    )
}