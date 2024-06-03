import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { ResourcesApi } from "./utils/classes/ResourcesApiClass.jsx";

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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage
                                  resourceList={resourceList}
                                  selectedMarker={selectedMarker}
                                  onMarkerClick={handMarkerClick}
                                  markerInfo={markerInfo}
                                />} />
        <Route path="/about" element={<AboutPage
                                        resourceList={resourceList}
                                      />} />
        <Route path="/map" element={<MapViewPage
                                      resourceList={resourceList}
                                      selectedMarker={selectedMarker}
                                      onMarkerClick={handMarkerClick}
                                      markerInfo={markerInfo}
                                    />} />
        <Route path="/list" element={<ListViewPage
                                      resourceList={resourceList}
                                    />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;