import igLogo from "../../assets/icons/Instagram_Glyph_Gradient.svg";
import "./Contact.scss";

export function Contact() {
    return (
        <div className="contact">
            <h2 className="contact__title">Contact</h2>
            <p className="contact__content">Have questions about the app, resources, or QHH admin?</p>
            <p className="contact__content">Please email <span><a className="contact__link" href="mailto:queer.health.hub@gmail.com">queer.health.hub@gmail.com</a></span>.</p>
            <a className="contact__ig" href="https://www.instagram.com/queerhealthhub/">
                <img className="contact__ig-icon" src={igLogo} alt="Instagram" />
            </a>
        </div>
    );
}