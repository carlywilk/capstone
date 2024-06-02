import { useState } from "react";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import "./ResourceAccordian.scss";

export function ResourceAccordian({ resourceList }) {

    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    }

    return (
        <>
            {resourceList.map((resource) => (
                <Accordion
                    key={resource.id}
                    className="accordion"
                    expanded={expanded === resource.id}
                    disableGutters={true}
                    onChange={handleChange(resource.id)}
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
                                <h2 className="accordion__header">{resource.resource_name}</h2>
                            ) : (
                                <h2 className="accordion__header">Loading...</h2>
                            )}
                        </AccordionSummary>
                            <AccordionDetails className="accordion__content">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi distinctio consequatur perspiciatis odit sint laudantium maiores est ipsa ad dicta, laborum aperiam quae quibusdam. Nisi, velit dolore. Culpa, tempore sequi.</p>
                            </AccordionDetails>
                </Accordion>
            ))}
        </>
    );
}