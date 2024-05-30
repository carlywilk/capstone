
import { useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import "./ResourceAccordian.scss";

export function ResourceAccordian() {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (isExpanded, panel) => {
        setExpanded(isExpanded ? panel : false);
    }

    return (
        <>
            <Accordion expanded={ expanded === "panel1" } onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")} >
                <AccordionSummary className="accordian__header">
                    <h2>Accordian 1</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi distinctio consequatur perspiciatis odit sint laudantium maiores est ipsa ad dicta, laborum aperiam quae quibusdam. Nisi, velit dolore. Culpa, tempore sequi.</p>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={ expanded === "panel2" } onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")} >
                <AccordionSummary className="accordian__header">
                    <h2>Accordian 2</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi distinctio consequatur perspiciatis odit sint laudantium maiores est ipsa ad dicta, laborum aperiam quae quibusdam. Nisi, velit dolore. Culpa, tempore sequi.</p>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={ expanded === "panel3" } onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")} >
                <AccordionSummary className="accordian__header">
                    <h2>Accordian 3</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi distinctio consequatur perspiciatis odit sint laudantium maiores est ipsa ad dicta, laborum aperiam quae quibusdam. Nisi, velit dolore. Culpa, tempore sequi.</p>
                </AccordionDetails>
            </Accordion>
        </>
    );
}