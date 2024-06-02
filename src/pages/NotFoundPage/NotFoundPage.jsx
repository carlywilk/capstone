import { useParams } from "react-router";
import { useEffect } from "react";

import { ResourcesApi } from "../../utils/classes/ResourcesApiClass";

import "./NotFoundPage.scss";

export function NotFoundPage() {

    const { id } = useParams();

    useEffect(() => {
        const fetchResourcesData = async () => {
            const resourcesApi = new ResourcesApi();
            try {
                const resourcesResponse = await resourcesApi.getResourceList();
                console.log(resourcesResponse);
            } catch (error) {
                console.error("Resources list not loaded");
            }
        }
        fetchResourcesData();
    }, [])

    return (
        <>
            <p>this is the not found page</p>
        </>
    );
}