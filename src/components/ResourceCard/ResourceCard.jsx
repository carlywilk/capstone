
import "./ResourceCard.scss";

export function ResourceCard({ markerInfo }) {
    return (
        <div className="resource-card">
            {markerInfo && (
                <div>
                    <h2>words words words</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nobis beatae tenetur quaerat sit itaque dolor? Fugit eaque dolorum maiores vitae aspernatur magnam enim quibusdam nam cupiditate, est itaque ducimus.</p>
                </div>
            )}
        </div>
    );
}