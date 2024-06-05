import { Link } from "react-router-dom";

import "./Header.scss";

export function Header() {
    return (
        <div className="header">
            <Link to="/" className="header__link">
                <h1 className="header__title">Queer Health Hub</h1>
            </Link>
        </div>
    );
}