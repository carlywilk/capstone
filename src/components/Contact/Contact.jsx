import "./Contact.scss";

export function Contact() {
    return (
        <div className="contact">
            <h2 className="contact__title">Contact</h2>
            <p className="contact__content">Have questions about the app, resources, or QHH admin?</p>
            <p className="contact__content">Please email <span><a className="contact__link" href="queer.health.hub@gmail.com">queer.health.hub@gmail.com</a></span>.</p>
        </div>
    );
}