import { useEffect } from "react";
import { useNavigate } from "react-router";

import { Header } from "../../components/Header/Header.jsx";
import { NavBar } from "../../components/NavBar/NavBar.jsx";
import { Sidebar } from "../../components/Sidebar/Sidebar.jsx";

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
            <section className="not-found__mobile">

            </section>
            <section className="not-found__desktop">
                <Sidebar />
                <div className="not-found__container">
                    <h2 className="not-found__title">Page not found</h2>
                    <h3 className="not-found__subtitle">Redirecting to homepage</h3>
                    <div className="not-found__animation"></div>
                </div>
            </section>
        </section>
    );
}