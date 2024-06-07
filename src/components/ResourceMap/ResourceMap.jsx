"use client";

// import { useState } from 'react';

import { 
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow
} from '@vis.gl/react-google-maps';

// import { Link } from 'react-router-dom';

// import { ResourceModal } from '../ResourceModal/ResourceModal.jsx';

import "./ResourceMap.scss";

const places = [
    { id: 1, lat: 43.66191187865744, lng: -79.38733411845752}, // WCH
    { id: 2, lat: 43.662574638569616, lng: -79.3722748896215}, // Sherbourne Health
    { id: 3, lat: 43.66015563568564, lng: -79.37878054544127}, // Hassle Free Clinic
    { id: 4, lat: 43.689176099169295, lng: -79.29886194543997}, // Thrive Kids Clinic
    { id: 5, lat: 43.65377124428925, lng: -79.40547702026059}, // 2SLGBTQIA+ Neurology Clinic
    { id: 6, lat: 43.66209018250031, lng: -79.37318341076121}, // Anishnawbe Health Toronto
    { id: 7, lat: 43.64310049205079, lng: -79.42116537608366}, // CAMH
    { id: 8, lat: 43.660621683748666, lng: -79.3860264337501}, // Toronto Plastic Surgery
    { id: 9, lat: 43.65006404774825, lng: -79.36939147427779}, // 2-Spirited People of the 1st Nations
    { id: 10, lat: 43.66667398942517, lng: -79.38107104544095}, // THE 519
    { id: 11, lat: 43.662478115873796, lng: -79.37211763009694}, // Rainbow Health Ontario
    { id: 12, lat: 43.6857116140509, lng: -79.32251557427611}, // Toronto Pflag
    { id: 13, lat: 43.66994287413304, lng: -79.39749796078503}, // Planned Parenthood Toronto
    { id: 15, lat: 43.652117615488805, lng: -79.39821304544161}, // Asian Community AIDS Services (ACAS)
];

// const mapCenter = { lat: 43.65702881311502, lng: -79.38428138643111 };
const mapCenter = { lat: 43.669163391003174, lng: -79.37109629132236 };

export function ResourceMap({
    selectedMarker,
    onMarkerClick
    }) {

    return (
        <main className="map">
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
                <Map
                    mapId={process.env.REACT_APP_GOOGLE_MAP_ID}
                    defaultZoom={12}
                    center={mapCenter}
                    // gestureHandling={"cooperative"}
                    streetViewControl={false}
                    fullscreenControl={false}
                    scrollwheel={true}
                    disableDefaultUI={true}
                    >
                        {places.map(marker => (
                            <AdvancedMarker
                                key={marker.id}
                                position={marker}
                                onClick={() => onMarkerClick(marker)}
                            >
                                <Pin 
                                    background={"#d81159ff"}
                                    glyphColor={"#FFF5E1"}
                                />
                            </AdvancedMarker>
                        ))}
                        {/* {selectedMarker && (
                            <InfoWindow
                                position={selectedMarker}
                                onCloseClick={() => onMarkerClick(null)}
                            >
                                <Link to="/list" >
                                    <p className="map__card-link">Details here</p>
                                </Link>
                                <div className="map__modal">
                                    <ResourceModal />
                                </div>
                            </InfoWindow>
                        )} */}
                    {/* <Markers points={places} /> */}
                </Map>
            </APIProvider>
        </main>
    );
}
