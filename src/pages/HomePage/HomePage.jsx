
import { ResourceMap } from "../../components/ResourceMap/ResourceMap.jsx";

import "./HomePage.scss";

export function HomePage() {
    return (
        <>
            <h1 className="title" >Hello world! Testing the Google Maps API!</h1>
            <ResourceMap />
        </>
    );
}