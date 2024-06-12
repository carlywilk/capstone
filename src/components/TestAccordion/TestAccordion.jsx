import { useState } from "react";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import addressIcon from "../../assets/icons/location_city_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import emailIcon from "../../assets/icons/mail_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import phoneIcon from "../../assets/icons/call_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import websiteIcon from "../../assets/icons/link_24dp_FILL0_wght400_GRAD0_opsz24.svg";

// import "./ResourceAccordian.scss";

export function TestAccordion({
    resourceList,
    servicesList
    }) {

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
                        margin:"0 0 1rem 0",
                        border:"2px solid #000000",
                        borderRadius:"0.25rem",
                        boxShadow:"#000000 4px 4px 0 0",
                        backgroundColor:"#FFF5E1"
                    }}
                    >
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon
                                sx={{
                                    color: "#000000"}}
                                />}
                            aria-controls="accordion__summary"
                        >
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
                                    <a className="accordion__content-link" href={resource.resource_phone}>{resource.resource_phone}</a>
                                </div>
                                <div className="accordion__info-container">
                                    <img className="accordion__icon" src={emailIcon} alt="email" />
                                    <a className="accordion__content-link" href={resource.resource_email}>{resource.resource_email}</a>
                                </div>
                                <div className="accordion__services-container">
                                    <h3 className="accordion__services-title">Services Offered:</h3>
                                    {servicesList
                                        .filter(service => service.resource_id === resource.id)
                                        .map((service, index) => (
                                        <p
                                            key={index}
                                            className="accordion__services"
                                        >
                                            {service.service_type}</p>
                                    ))}
                                </div>
                                <div className="accordion__website-container">
                                    <p className="accordion__website-title">Website</p>
                                    <a className="accordion__link" href={resource.resource_website} target="_blank" rel="noreferrer">
                                        <img className="accordion__website-icon" src={websiteIcon} alt="" />
                                    </a>
                                </div>
                            </AccordionDetails>
                </Accordion>
            ))}
        </>
    );
}