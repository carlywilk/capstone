import addressIcon from "../../assets/icons/location_city_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import directionsIcon from "../../assets/icons/directions_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import emailIcon from "../../assets/icons/mail_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import phoneIcon from "../../assets/icons/call_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import websiteIcon from "../../assets/icons/link_24dp_FILL0_wght400_GRAD0_opsz24.svg";

import "./ResourceCard.scss";

export function ResourceCard({
    markerInfo,
    servicesList
    }) {

    
    const handleDirections = () => {
        const destination = `${markerInfo.resource_address}, Toronto, Ontario, Canada`;
        const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
        window.open(mapsUrl, '_blank')
    }
    

    return (
        <div className="resource-card">
            {markerInfo ? (
                <div>
                    <h3 className="resource-card__title">{markerInfo.resource_name}</h3>

                    <div className="resource-card__info-container">
                        <img className="resource-card__icon" src={addressIcon} alt="" />
                        <p className="resource-card__content">{markerInfo.resource_address}</p>
                    </div>

                    <div className="resource-card__info-container">
                        <img className="resource-card__icon" src={phoneIcon} alt="" />
                        <a className="resource-card__content-link" href={`tel:${markerInfo.resource_phone}`}>{markerInfo.resource_phone}</a>
                    </div>

                    <div className="resource-card__info-container">
                        <img className="resource-card__icon" src={emailIcon} alt="" />
                        <a className="resource-card__content-link" href={`mailto:${markerInfo.resource_email}`}>{markerInfo.resource_email}</a>
                    </div>
                    <div className="resource-card__services-container">
                        <h3 className="resource-card__services-title">Services Offered:</h3>
                        {servicesList.map((service, index) => (
                            <p 
                                key={index}
                                className="resource-card__services"
                            >
                                {service.service_type}</p>
                        ))}
                    </div>
                    <div className="resource-card__links-container">
                        <a className="resource-card__website-container" href={markerInfo.resource_website} target="_blank" rel="noreferrer">
                            <p className="resource-card__website-title">Website</p>
                            <img className="resource-card__icon" src={websiteIcon} alt="two links connected together, links to resource website" />
                        </a>
                        <button className="resource-card__directions" onClick={handleDirections}>Directions
                            <img className="resource-card__directions-icon" src={directionsIcon} alt="" />
                        </button>
                    </div>
                </div>
            ) : (
                <p className="resource-card__title--padding">Please select a marker</p>
            )}
        </div>
    );
}