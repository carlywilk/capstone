
import { Header } from "../Header/Header.jsx";
import { AboutApp } from "../AboutApp/AboutApp.jsx";
import { NavBar } from "../NavBar/NavBar.jsx";

import logo from "../../assets/logo/e5.png";

import "./Sidebar.scss";

export function Sidebar() {
    return (
        <section className="sidebar">
            <Header />
            <AboutApp />
            <NavBar />
        </section>
    );
}