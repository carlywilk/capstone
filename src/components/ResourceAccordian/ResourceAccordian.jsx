import { useEffect, useState } from "react";

import { ResourcesApi } from "../../utils/classes/ResourcesApiClass.jsx";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import "./ResourceAccordian.scss";

export function ResourceAccordian() {

    const [expanded, setExpanded] = useState(false);
    const [resourceList, setResourceList] = useState([]);

    const handleChange = (isExpanded, panel) => {
        setExpanded(isExpanded ? panel : false);
    }

    useEffect(() => {
        const fetchResourcesData = async () => {
            const resourcesApi = new ResourcesApi();
            try {
                const resourcesResponse = await resourcesApi.getResourceList();
                setResourceList(resourcesResponse.data);
                console.log(resourcesResponse)
            } catch (error) {
                console.error("Resources list not loaded");
            }
        }
        fetchResourcesData();
    }, [setResourceList])

    return (
        <>
            <Accordion
                className="accordion"
                expanded={ expanded === "panel1" }
                disableGutters={true}
                onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
                sx={{
                    margin:"0.75rem 0",
                    border:"2px solid #000000",
                    borderRadius:"0.25rem",
                    boxShadow:"#000000 4px 4px 0 0",
                    backgroundColor:"#FFF5E1"
                }}
                >
                    <AccordionSummary>
                    {resourceList.length > 0 ? (
                            <h2 className="accordion__header">{resourceList[0].resource_name}</h2>
                        ) : (
                            <h2 className="accordion__header">Loading...</h2>
                        )}
                    </AccordionSummary>
                        <AccordionDetails className="accordion__content">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi distinctio consequatur perspiciatis odit sint laudantium maiores est ipsa ad dicta, laborum aperiam quae quibusdam. Nisi, velit dolore. Culpa, tempore sequi.</p>
                        </AccordionDetails>
            </Accordion>
            <Accordion
                className="accordion"
                expanded={ expanded === "panel2" }
                disableGutters={true}
                onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
                sx={{
                    margin:"0.75rem 0",
                    border:"2px solid #000000",
                    borderRadius:"0.25rem",
                    boxShadow:"#000000 4px 4px 0 0",
                    backgroundColor:"#FFF5E1"
                }}
                >
                    <AccordionSummary>
                        <h2 className="accordion__header">Accordian 2</h2>
                    </AccordionSummary>
                        <AccordionDetails className="accordion__content">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi distinctio consequatur perspiciatis odit sint laudantium maiores est ipsa ad dicta, laborum aperiam quae quibusdam. Nisi, velit dolore. Culpa, tempore sequi.</p>
                        </AccordionDetails>
            </Accordion>
            <Accordion
                className="accordion"
                expanded={ expanded === "panel3" }
                disableGutters={true}
                onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
                sx={{
                    margin:"0.75rem 0",
                    border:"2px solid #000000",
                    borderRadius:"0.25rem",
                    boxShadow:"#000000 4px 4px 0 0",
                    backgroundColor:"#FFF5E1"
                }}
                >
                    <AccordionSummary>
                        <h2 className="accordion__header">Accordian 3</h2>
                    </AccordionSummary>
                        <AccordionDetails className="accordion__content">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi distinctio consequatur perspiciatis odit sint laudantium maiores est ipsa ad dicta, laborum aperiam quae quibusdam. Nisi, velit dolore. Culpa, tempore sequi.</p>
                        </AccordionDetails>
            </Accordion>
        </>
    );
}