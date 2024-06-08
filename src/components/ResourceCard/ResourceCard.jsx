import addressIcon from "../../assets/icons/location_city_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import emailIcon from "../../assets/icons/mail_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import phoneIcon from "../../assets/icons/call_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import websiteIcon from "../../assets/icons/link_24dp_FILL0_wght400_GRAD0_opsz24.svg";

import "./ResourceCard.scss";

export function ResourceCard({
    markerInfo,
    servicesList
    }) {

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
                        <p className="resource-card__content">{markerInfo.resource_phone}</p>
                    </div>

                    <div className="resource-card__info-container">
                        <img className="resource-card__icon" src={emailIcon} alt="" />
                        <p className="resource-card__content">{markerInfo.resource_email}</p>
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
                    <a className="resource-card__link" href={markerInfo.resource_website}>
                        <img className="resource-card__icon" src={websiteIcon} alt="two links connected together, links to resource website" />
                    </a>
                </div>
            ) : (
                <p className="resource-card__title--padding">No marker selected</p>
            )}
        </div>
    );
}