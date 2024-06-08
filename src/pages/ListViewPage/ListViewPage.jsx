import { useState, useEffect } from "react";

import { ServicesApi } from "../../utils/classes/ServicesApiClass.jsx";

import { BackToTopButton } from "../../components/BackToTopButton/BackToTopButton.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { HomeNav } from "../../components/HomeNav/HomeNav.jsx";
import { NavBar } from "../../components/NavBar/NavBar.jsx";
import { ResourceAccordian } from "../../components/ResourceAccordian/ResourceAccordian.jsx";
import { SearchBar } from "../../components/SearchBar/SearchBar.jsx";

import "./ListViewPage.scss";

export function ListViewPage({ resourceList }) {
    const [sortedResourceList, setSortedResourceList] = useState([]);
    const [servicesList, setServicesList] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            const servicesApi = new ServicesApi();
            try {
                const response = await servicesApi.getServicesList();
                setServicesList(response.data);
            } catch (error) {
                console.error("Error fetching resource services", error);
            }
        }
        fetchServices();
    }, [setServicesList]);

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
                        <SearchBar />
                        <div className="list__home-nav">
                            <HomeNav />
                        </div>
                    </div>
                    <div className="list__sidebar--hide">
                        <NavBar />
                    </div>
                </section>
                <section className="list__resources">
                    <ResourceAccordian resourceList={sortedResourceList} servicesList={servicesList} />
                </section>
            </main>
            <BackToTopButton />
        </section>
    )
}