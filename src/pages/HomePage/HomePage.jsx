import { useState } from "react";

import { BackToTopButton } from "../../components/BackToTopButton/BackToTopButton.jsx";
import { Contact } from "../../components/Contact/Contact.jsx";
import { Emergency } from "../../components/Emergency/Emergency.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { HomeNav } from "../../components/HomeNav/HomeNav.jsx";
import { NavBar } from "../../components/NavBar/NavBar.jsx";
import { ResourceCard } from "../../components/ResourceCard/ResourceCard.jsx";
import { ResourceMap } from "../../components/ResourceMap/ResourceMap.jsx";
// import { SearchBar } from "../../components/SearchBar/SearchBar.jsx";

import "./HomePage.scss";

export function HomePage({
    resourceList,
    selectedMarker,
    onMarkerClick,
    markerInfo,
    servicesList
    }) {

    const [showOverlay, setShowOverlay] = useState(
        sessionStorage.getItem("overlayShown") !== "true"
    );

    const handleOverlayClose = () => {
        setShowOverlay(false);
        sessionStorage.setItem("overlayShown", "true");
    };

    return (
        <section className="landing">
            {showOverlay && (
                <div
                    className="overlay"
                    onClick={handleOverlayClose}
                >
                    <div className="overlay__content-container">
                        <h1 className="overlay__title">🌈 Welcome to Queer Health Hub!</h1>
                        <p className="overlay__content">QHH is a local resource for 2SLGBTQIA++ people in the City of Toronto that aims to increase access to information, resources, and healthcare service providers. The Queer Health Hub app is built on the foundations of intersectionality, consent-based care, and queer safety. Resources are continually added, please reach out to </p>
                        <p className="overlay__sub-content">Resources are continually added</p>
                        <p className="overlay__sub-content--padded">Email <span><a className="overlay__sub-content-link" href="mailto:queer.health.hub@gmail.com">queer.health.hub@gmail.com</a></span> if you want to submit a resource to be uploaded.</p>
                        <button className="overlay__button" onClick={handleOverlayClose}>View Resources</button>
                    </div>
                </div>
            )}
            <main className="landing__main">
                <section className="landing__sidebar">
                    <div className="landing__sidebar--padded">
                        <Header />
                        {/* <SearchBar /> */}
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
            <div className="landing__contact">
                <Contact />
            </div>
            <div className="landing__nav-bar">
                <NavBar />
            </div>
            <BackToTopButton />
        </section>
    )
}
