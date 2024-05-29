
import { NavBar } from "../NavBar/NavBar.jsx";

import logo from "../../assets/logo/e5.png";

import "./Sidebar.scss";

export function Sidebar() {
    return (
        <section className="sidebar">
            <h2 className="sidebar__title-r1">Queer</h2>
            <h2 className="sidebar__title-r2">Health</h2>
            <h1 className="sidebar__title-r3">Hub</h1>
            <div className="sidebar__about-card">
                <p className="sidebar__about-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur delectus natus molestiae quam doloribus libero optio blanditiis ea officiis, ipsum, illum ducimus assumenda iste ex repellendus eos dignissimos aperiam soluta.</p>
            </div>
            <img className="sidebar__logo" src={logo} alt="" />
            <NavBar />
        </section>
    );
}