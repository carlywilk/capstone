import "./Emergency.scss";

export function Emergency() {
    return (
        <div className="emergency-card">
            <h2 className="emergency-card__title">Emergency & Crisis Services</h2>
            <p className="emergency-card__content">For emergency health support, please dial 9-1-1 or go to your nearest emergency room.</p>
            <div className="emergency-card__contact-container">
                <h3 className="emergency-card__subtitle">Suicide Crisis Helpline</h3>
                <p className="emergency-card__details">9-8-8</p>
            </div>
            <div className="emergency-card__contact-container">
                <h3 className="emergency-card__subtitle">Trans Lifeline</h3>
                <p className="emergency-card__details">(877) 330 - 6366 </p>
            </div>
            <div className="emergency-card__contact-container">
                <h3 className="emergency-card__subtitle">Distress Centres of Greater Toronto</h3>
                <p className="emergency-card__details">(416) 408 - 4357</p>
            </div>
            <div className="emergency-card__contact-container">
                <h3 className="emergency-card__subtitle">Gerstein Crisis Centre</h3>
                <p className="emergency-card__details">(416) 929 - 5200</p>
            </div>
            <div className="emergency-card__contact-container">
                <h3 className="emergency-card__subtitle">Toronto Rape Crisis Centre</h3>
                <p className="emergency-card__details">(416) 597 - 8808</p>
            </div>
            <div className="emergency-card__contact-container">
                <h3 className="emergency-card__subtitle">Telehealth Ontario</h3>
                <p className="emergency-card__details">1 (866) 797 - 0000</p>
            </div>
        </div>
    );
}