import searchIcon from "../../assets/icons/search_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import "./SearchBar.scss";

export function SearchBar() {
    return (
        <>
            <input
                type="text"
                // name="search-form"
                // id="search-form"
                className="search"
                placeholder="Search"
            />
        </>
    );
}