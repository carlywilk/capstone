"use client";
import { useEffect, useState, useRef } from 'react';
import { 
    APIProvider,
    Map,
    useMap,
    AdvancedMarker,
    Pin,
    InfoWindow
} from '@vis.gl/react-google-maps';
// import { MarkerClusterer } from '@googlemaps/markerclusterer';
// import { Marker } from '@googlemaps/markerclusterer';

// import customMarker from "../../assets/icons/family_star_24dp_FILL0_wght400_GRAD0_opsz24.png";

import "./ResourceMap.scss";

// const googleMapsApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

// const mapId = process.env.REACT_APP_GOOGLE_MAP_ID;

const places = [
    { id: 1, lat: 43.68080172103611, lng: -79.41683302824372 },
    { id: 2, lat: 43.67210063224841, lng: -79.40019847096802},
    { id: 3, lat: 43.65895068477414, lng: -79.41280732582267}
];

const position = { lat: 43.68080172103611, lng: -79.41683302824372 };

export function ResourceMap() {


    // const [open, setOpen] = useState(false);

    return (
        <main className="map">
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
                <Map
                    mapId={process.env.REACT_APP_GOOGLE_MAP_ID}
                    // zoom={10}
                    center={position}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                    >

                    <Markers points={places} />

                    {/* <AdvancedMarker
                        position={position}
                        onClick={() => setOpen(true)}    
                    >
                            <Pin 
                                background={"grey"}
                                borderColor={"green"}
                                glyphColor={"purple"}
                            />
                        </AdvancedMarker>
                    
                    {open && <InfoWindow 
                        position={position}
                        onCloseClick={() => setOpen(false)}
                    >
                        <p>I'm in Toronto</p>    
                    </InfoWindow>} */}
                </Map>
            </APIProvider>
        </main>
    );
}

const Markers = ({ points }) => {

    const [open, setOpen] = useState(false);

    return <>
        {points.map(point => <AdvancedMarker 
            key={point.key}
            position={point}
            onClick={() => setOpen(true)}
            >
            <span className="map__icon" >❤️</span>
        </AdvancedMarker>)}
        {open && <InfoWindow
            position={position}
            onCloseClick={() => setOpen(false)}
            > <p>I'm in Toronto</p>
        </InfoWindow>}
    </>
};
