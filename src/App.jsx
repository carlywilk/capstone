import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { ResourcesApi } from "./utils/classes/ResourcesApiClass.jsx";
import { ServicesApi } from './utils/classes/ServicesApiClass.jsx';

import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { AboutPage } from "./pages/AboutPage/AboutPage.jsx";
import { MapViewPage } from "./pages/MapViewPage/MapViewPage.jsx";
import { ListViewPage } from "./pages/ListViewPage/ListViewPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage.jsx";

import './App.scss';

function App() {
  const [resourceList, setResourceList] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [markerInfo, setMarkerInfo] = useState(null);

  const [serviceList, setServiceList] = useState([]);

  const handMarkerClick = (marker) => {
      setSelectedMarker(marker);
      const clickedResource = marker ? resourceList.find(resource => resource.id === marker.id) : null;
      setMarkerInfo(clickedResource);
  };

  useEffect(() => {
    const fetchResourcesData = async () => {
        const resourcesApi = new ResourcesApi();
        try {
            const resourcesResponse = await resourcesApi.getResourceList();
            setResourceList(resourcesResponse.data);
        } catch (error) {
            console.error("Resources list not loaded");
        }
    }
    fetchResourcesData();
  }, [setResourceList])

  useEffect(() => {
    const fetchServicesData = async () => {
      const servicesApi = new ServicesApi();
      try {
        const servicesResponse = await servicesApi.getServicesList();
        setServiceList(servicesResponse.data);
      } catch (error) {
        console.error("Service list not loaded")
      }
    }
    fetchServicesData();
  }, [setServiceList])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage
                                  resourceList={resourceList}
                                  selectedMarker={selectedMarker}
                                  onMarkerClick={handMarkerClick}
                                  markerInfo={markerInfo}
                                  serviceList={serviceList}
                                />} />
        <Route path="/about" element={<AboutPage
                                        resourceList={resourceList}
                                      />} />
        <Route path="/map" element={<MapViewPage
                                      resourceList={resourceList}
                                      selectedMarker={selectedMarker}
                                      onMarkerClick={handMarkerClick}
                                      markerInfo={markerInfo}
                                      serviceList={serviceList}
                                    />} />
        <Route path="/list" element={<ListViewPage
                                      resourceList={resourceList}
                                      serviceList={serviceList}
                                    />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;