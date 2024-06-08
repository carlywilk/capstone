import { useEffect, useState } from "react"

import arrowUp from "../../assets/icons/arrow_upward_24dp_FILL0_wght400_GRAD0_opsz24.svg";

import "./BackToTopButton.scss";

export function BackToTopButton() {

    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTop(true);
            } else {
                setBackToTop(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0, 
            behavior: "smooth"
        })
    }

    return (
        <div className="scroll-button__container">
            {backToTop && (
                <button
                    className="scroll-button"
                    onClick={scrollUp}
                >
                    <img className="scroll-button__icon" src={arrowUp} alt="" />
                </button>
            )}
        </div>
    )
}