"use client";
import { useState } from 'react';
import { 
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow
} from '@vis.gl/react-google-maps';

import "./ResourceMap.scss";

const places = [
    { id: 1, lat: 43.68080172103611, lng: -79.41683302824372 }, // 1383 Bathurst
    { id: 2, lat: 43.66191187865744, lng: -79.38733411845752}, // WCH
    { id: 3, lat: 43.662574638569616, lng: -79.3722748896215} // Sherbourne Health
];

const position = { lat: 43.68080172103611, lng: -79.41683302824372 };

export function ResourceMap() {

    return (
        <main className="map">
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
                <Map
                    mapId={process.env.REACT_APP_GOOGLE_MAP_ID}
                    defaultZoom={12}
                    center={position}
                    // gestureHandling={"cooperative"}
                    streetViewControl={false}
                    fullscreenControl={false}
                    scrollwheel={true}
                    disableDefaultUI={true}
                    >
                    <Markers points={places} />
                </Map>
            </APIProvider>
        </main>
    );
}

const Markers = ({ points }) => {
    const [open, setOpen] = useState(false);
    const [clickPosition, setClickedPosition] = useState(null);

    return <>
        {points.map(point => <AdvancedMarker 
            key={point.key}
            position={point}
            onClick={() => {
                setOpen(true)
                setClickedPosition(point)
                }}
            >
                <Pin 
                    background={"#d81159ff"}
                    glyphColor={"#FFF5E1"}
                />
        </AdvancedMarker>)}
        {open && clickPosition && <InfoWindow
            position={clickPosition}
            onCloseClick={() => setOpen(false)}
            > <p>I'm in Toronto</p>
        </InfoWindow>}
    </>
};
