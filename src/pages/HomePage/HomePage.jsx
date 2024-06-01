
import { AboutApp } from "../../components/AboutApp/AboutApp.jsx";
import { Emergency } from "../../components/Emergency/Emergency.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { MapLegend } from "../../components/MapLegend/MapLegend.jsx";
import { ResourceCard } from "../../components/ResourceCard/ResourceCard.jsx";
import { ResourceMap } from "../../components/ResourceMap/ResourceMap.jsx";
import { Sidebar } from "../../components/Sidebar/Sidebar.jsx";
import { SearchBar } from "../../components/SearchBar/SearchBar.jsx";
import { NavBar } from "../../components/NavBar/NavBar.jsx";

import qhhLogo from "../../assets/logo/e5.png";
import qhhLogo2 from "../../assets/logo/e2.png"

import "./HomePage.scss";

//option 1
// export function HomePage() {
//     return (
//         <section className="landing">
//             <Header className="landing__header"/>
//             <AboutApp className="landing__about" />
//             <div className="landing__search">
//                 <SearchBar />
//                 <img className="landing__logo" src={qhhLogo} alt="" />
//             </div>
//             <NavBar />
//         </section>
//     );
// }

// option 2
export function HomePage() {
    return (
        <section className="landing">
            <section className="landing__mobile">
                <Header />
                <AboutApp />
                <SearchBar />
                <NavBar />
            </section>
            <section className="landing__desktop">
                <Sidebar />
                {/* <NavBar /> */}
                <div className="landing__desktop-main">
                    <ResourceMap />
                </div>
                <div className="landing__desktop-resources">
                    <ResourceCard />
                    <Emergency />
                    <MapLegend />
                </div>
            </section>
        </section>
    );
}