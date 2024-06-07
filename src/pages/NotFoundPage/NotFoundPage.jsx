import { useEffect } from "react";
import { useNavigate } from "react-router";

import "./NotFoundPage.scss";

export function NotFoundPage() {

    const navigate = useNavigate();

    useEffect(() => {
        const redirectDelay = setTimeout(() => {
            navigate("/");
        }, 4000);

        return () => clearTimeout(redirectDelay);
    }, [navigate]);

    return (
        <section className="not-found">
                <section className="not-found__content-container">
                    <div className="not-found__content">
                        <h2 className="not-found__title">Page not found</h2>
                        <h3 className="not-found__subtitle">Redirecting to homepage</h3>
                        <div className="not-found__animation"></div>
                    </div>
                </section>
        </section>
    );
}