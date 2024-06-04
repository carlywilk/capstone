import { useState, useEffect } from "react";

import { AboutApp } from "../../components/AboutApp/AboutApp.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { ResourceAccordian } from "../../components/ResourceAccordian/ResourceAccordian.jsx";
import { SearchBar } from "../../components/SearchBar/SearchBar.jsx";
import { NavBar } from "../../components/NavBar/NavBar.jsx";

import "./ListViewPage.scss";

export function ListViewPage({ resourceList }) {
    const [sortedResourceList, setSortedResourceList] = useState([]);

    useEffect(() => {
        const sortedList = resourceList.slice().sort((a, b) => a.resource_name.localeCompare(b.resource_name));
        setSortedResourceList(sortedList);
    }, [resourceList]);

    return (
        <section className="list">
            <main className="list__main">
                <section className="list__sidebar">
                    <div className="list__sidebar--padded">
                        <Header />
                        <div className="list__sidebar--hide">
                            <AboutApp />
                        </div>
                        <SearchBar />
                    </div>
                    <NavBar />
                </section>
                <section className="list__resources">
                    <ResourceAccordian resourceList={sortedResourceList} />
                </section>
                <h2 className="list__resources--hide">Page under construction</h2>
            </main>
        </section>
    )
}