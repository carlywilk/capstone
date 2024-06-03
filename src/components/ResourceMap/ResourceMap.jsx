"use client";
import { useState } from 'react';
import { 
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow
} from '@vis.gl/react-google-maps';

import { Link } from 'react-router-dom';

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
];

const mapCenter = { lat: 43.65702881311502, lng: -79.38428138643111 };

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
                        {selectedMarker && (
                            <InfoWindow
                                position={selectedMarker}
                                // onCloseClick={() => onMarkerClick(null)}
                                // onCloseClick={() => onMarkerClick(selectedMarker)}
                                onCloseClick={() => onMarkerClick(null)}
                            >
                                <Link to="/list" >
                                    <p className="map__card-link">Details here</p>
                                </Link>
                            </InfoWindow>
                        )}
                    {/* <Markers points={places} /> */}
                </Map>
            </APIProvider>
        </main>
    );
}

// const Markers = ({ points }) => {
//     const [open, setOpen] = useState(false);
//     const [clickPosition, setClickedPosition] = useState(null);

//     return <>
//         {points.map(point => <AdvancedMarker 
//             key={places.id}
//             position={point}
//             onClick={() => {
//                 setOpen(true)
//                 setClickedPosition(point)
//                 }}
//             >
//                 <Pin 
//                     background={"#d81159ff"}
//                     glyphColor={"#FFF5E1"}
//                 />
//         </AdvancedMarker>)}
//         {open && clickPosition && <InfoWindow
//             position={clickPosition}
//             onCloseClick={() => setOpen(false)}
//             >
//                 <Link to="/list" >
//                 <p className="map__card-link">Details here</p>
//                 </Link>
//         </InfoWindow>}
//     </>
// };
