
import { ResourceAccordian } from "../../components/ResourceAccordian/ResourceAccordian.jsx";
import { ResourceMap } from "../../components/ResourceMap/ResourceMap.jsx";

import "./HomePage.scss";

export function HomePage() {
    return (
        <>
            <h1 className="title" >Hello world! Testing mui/base accordian!</h1>
            <ResourceAccordian />
            {/* <ResourceMap /> */}
        </>
    );
}