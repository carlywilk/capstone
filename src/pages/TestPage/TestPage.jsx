import { useState, useEffect } from "react"

import { ResourcesApi } from "../../utils/classes/ResourcesApiClass.jsx";
import { ServicesApi } from "../../utils/classes/ServicesApiClass";

import { TestAccordion } from "../../components/TestAccordion/TestAccordion.jsx";


import { BackToTopButton } from "../../components/BackToTopButton/BackToTopButton.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { HomeNav } from "../../components/HomeNav/HomeNav.jsx";
import { NavBar } from "../../components/NavBar/NavBar.jsx";
import { SearchBar } from "../../components/SearchBar/SearchBar.jsx";

import "./TestPage.scss";

export function TestPage() {
    const [resourceList, setResourceList] = useState([]);
    const [sortedResourceList, setSortedResourceList] = useState([]);
    const [servicesList, setServicesList] = useState([]);
    const [filteredResourceList, setFilteredResourceList] = useState([]);

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
        const fetchResourcesData = async () => {
            const resourcesApi = new ResourcesApi();
            try {
                const resourcesResponse = await resourcesApi.getResourceList();
                const sortedList = resourcesResponse.data.slice().sort((a, b) => a.resource_name.localeCompare(b.resource_name));
                setResourceList(sortedList);
            } catch (error) {
                console.error("Resources list not loaded");
            }
        }
        fetchResourcesData();
    }, [setResourceList])

    const serviceTags = [
        { label: "", value: 0 },
        { label: "Primary Care", value: 1 },
        { label: "Sexual Health", value: 2 },
        { label: "Gender & Transition-Related Care", value: 3 },
        { label: "Post-Surgical Care", value: 4 },
        { label: "Mental Health & Wellbeing", value: 5 },
        { label: "Indigenous Health & Non-Western Medicine", value: 6 },
        { label: "Information & Resources", value: 7 },
        { label: "Pediatrics", value: 8 },
    ]

    const [allServices, setAllServices] = useState([]);
    const [selectedService, setSelectedService] = useState(serviceTags[0].value);

    const updateSelectedService = async (event) => {
        setSelectedService(event.target.value);
        const servicesApi = new ServicesApi();
        try {
            const response = await servicesApi.getService([event.target.value]);
            setAllServices(response.data);
            console.log(response.data);

            const filteredResources = resourceList
                .filter(resource => {
                    const matchingServices = response.data.filter(service => service.service_type === event.target.value);
                    return matchingServices.some(service => service.resource_id === resource.id);
                })
                .sort((a, b) => a.resource_name.localeCompare(b.resource_name));
            setFilteredResourceList(filteredResources);
        } catch (error) {
            console.error("Error fetching services list", error);
        }
    }

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

                <section className="list__content">
                    <section className="filter">
                        <div className="filter__container">
                            <p className="filter__subheading">Select from drop down below to filter resources by service type:</p>
                            <select className="filter__tag" value={selectedService} onChange={event => updateSelectedService(event)} >
                                {serviceTags.map(tag => (
                                    <option key={tag.value} value={tag.label}>{tag.label}</option>
                                ))}
                            </select>
                        </div>
                    </section>

                    <section className="list__resources">
                        <TestAccordion resourceList={filteredResourceList.length > 0 ? filteredResourceList : resourceList} servicesList={servicesList} allServices={allServices} />
                    </section>
                </section>

            </main>
            <BackToTopButton />
        </section>
    )
}