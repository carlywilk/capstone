import "./Emergency.scss";

export function Emergency() {
    return (
        <div className="emergency-card">
            <h2 className="emergency-card__title">Emergency & Crisis Services</h2>
            <p className="emergency-card__content">For emergency health support, please dial <span><a className="emergency-card__link" href="tel:911">9-1-1</a></span> or go to your nearest emergency room.</p>
            <div className="emergency-card__contact-container">
                <h3 className="emergency-card__subtitle">Suicide Crisis Helpline</h3>
                <p className="emergency-card__details"><span><a className="emergency-card__link" href="tel:988">9-8-8</a></span></p>
            </div>
            <div className="emergency-card__contact-container">
                <h3 className="emergency-card__subtitle">Trans Lifeline</h3>
                <p className="emergency-card__details"><span><a className="emergency-card__link" href="tel:18773306366">1 (877) 330 - 6366</a></span></p>
            </div>
            <div className="emergency-card__contact-container">
                <h3 className="emergency-card__subtitle">Distress Centres of Greater Toronto</h3>
                <p className="emergency-card__details"><span><a className="emergency-card__link" href="tel:4164084357">(416) 408 - 4357</a></span></p>
            </div>
            <div className="emergency-card__contact-container">
                <h3 className="emergency-card__subtitle">Gerstein Crisis Centre</h3>
                <p className="emergency-card__details"><span><a className="emergency-card__link" href="tel:4169295200">(416) 929 - 5200</a></span></p>
            </div>
            <div className="emergency-card__contact-container">
                <h3 className="emergency-card__subtitle">Toronto Rape Crisis Centre</h3>
                <p className="emergency-card__details"><span><a className="emergency-card__link" href="tel:4165978808">(416) 597 - 8808</a></span></p>
            </div>
            <div className="emergency-card__contact-container">
                <h3 className="emergency-card__subtitle">Telehealth Ontario</h3>
                <p className="emergency-card__details"><span><a className="emergency-card__link" href="tel:18667970000">1 (866) 797 - 0000</a></span></p>
            </div>
        </div>
    );
}