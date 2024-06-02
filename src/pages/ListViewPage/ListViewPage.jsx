import { Header } from "../../components/Header/Header.jsx";
import { ResourceAccordian } from "../../components/ResourceAccordian/ResourceAccordian.jsx";
import { NavBar } from "../../components/NavBar/NavBar.jsx";

import "./ListViewPage.scss";

export function ListViewPage() {

    return (
        <>
            <section className="list">
                <Header />
                <ResourceAccordian />
            </section>
            <NavBar />
        </>
    );
}