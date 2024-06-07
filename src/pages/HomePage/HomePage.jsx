import { Emergency } from "../../components/Emergency/Emergency.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { HomeNav } from "../../components/HomeNav/HomeNav.jsx";
import { NavBar } from "../../components/NavBar/NavBar.jsx";
import { ResourceCard } from "../../components/ResourceCard/ResourceCard.jsx";
import { ResourceMap } from "../../components/ResourceMap/ResourceMap.jsx";
import { SearchBar } from "../../components/SearchBar/SearchBar.jsx";

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
                        <SearchBar />
                    </div>
                <section className="landing__home-nav">
                    <HomeNav />
                </section>
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
                </section>
            </main>
            <div className="landing__emergency">
                <Emergency />
            </div>
            <div className="landing__nav-bar">
                <NavBar />
            </div>
        </section>
    )
}