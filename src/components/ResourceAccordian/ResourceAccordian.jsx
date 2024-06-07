import { useState } from "react";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import addressIcon from "../../assets/icons/location_city_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import emailIcon from "../../assets/icons/mail_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import phoneIcon from "../../assets/icons/call_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import websiteIcon from "../../assets/icons/link_24dp_FILL0_wght400_GRAD0_opsz24.svg";

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
                            <AccordionDetails className="accordion__content-container">
                                <div className="accordion__info-container">
                                    <img className="accordion__icon" src={addressIcon} alt="address" />
                                    <p className="accordion__content">{resource.resource_address}</p>
                                </div>
                                <div className="accordion__info-container">
                                    <img className="accordion__icon" src={phoneIcon} alt="phone" />
                                    <p className="accordion__content">{resource.resource_phone}</p>
                                </div>
                                <div className="accordion__info-container">
                                    <img className="accordion__icon" src={emailIcon} alt="email" />
                                    <p className="accordion__content">{resource.resource_email}</p>
                                </div>
                                {/* <div className="accordion__info-container">
                                    <img className="accordion__icon" src="" alt="accessible" />
                                    <p className="accordion__content"></p>
                                </div> */}
                                <a className="accordion__link" href={resource.resource_website}>
                                    <img className="accordion__icon" src={websiteIcon} alt="" />
                                </a>
                            </AccordionDetails>
                </Accordion>
            ))}
        </>
    );
}