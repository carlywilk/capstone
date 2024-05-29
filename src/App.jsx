import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { AboutPage } from "./pages/AboutPage/AboutPage.jsx";
import { MapViewPage } from "./pages/MapViewPage/MapViewPage.jsx";
import { ListViewPage } from "./pages/ListViewPage/ListViewPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage.jsx";

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/map" element={<MapViewPage />} />
        <Route path="/list" element={<ListViewPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;