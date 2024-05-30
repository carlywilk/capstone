import { Link } from "react-router-dom";
import "./NavBar.scss";

export function NavBar() {
    return (
        <nav>
            <div className="nav">
                <div className="nav__button">
                    <Link>
                        {/* <img className="nav__button-about" src="" alt="" /> */}
                        <p>❤️</p>
                    </Link>
                </div>
                <div className="nav__button">
                    <Link>
                        {/* <img className="nav__button-map" src="" alt="" /> */}
                        <p>❤️</p>
                    </Link>
                </div>
                <div className="nav__button">
                    <Link>
                        {/* <img className="nav__button-list" src="" alt="" /> */}
                        <p>❤️</p>
                    </Link>
                </div>
                <div className="nav__button">
                    <Link>
                        {/* <img className="nav__button-home" src="" alt="" /> */}
                        <p>❤️</p>
                    </Link>
                </div>
            </div>
        </nav>
    );
}