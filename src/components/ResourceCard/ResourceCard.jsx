
import "./ResourceCard.scss";

export function ResourceCard({
    markerInfo,
    }) {

    console.log(markerInfo);

    return (
        <div className="resource-card">
            {markerInfo ? (
                <div>
                    <h3 className="resource-card__title">{markerInfo.resource_name}</h3>
                    <p className="resource-card__address">{markerInfo.resource_address}</p>
                    <p className="resource-card__website">{markerInfo.resource_website}</p>
                    <p className="resource-card__phone">{markerInfo.resource_phone}</p>
                    <p className="resource-card__email">{markerInfo.resource_email}</p>
                    <p className="resource-card__access">{markerInfo.is_accessible}</p>
                </div>
            ) : (
                <p>No marker selected</p>
            )}
        </div>
    );
}