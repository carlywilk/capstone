import { useState } from "react";

import "./SearchBar.scss";

export function SearchBar() {

    const [searchItem, setSearchItem] = useState("");

    const handleInputChange = (event) => {
        const searchTerm = event.target.value;
        setSearchItem(searchTerm);
    }

    return (
        <>
            <input
                type="text"
                className="search"
                id="search-bar"
                placeholder="Search utility coming soon..."
                value={searchItem}
                onChange={handleInputChange}
            />
        </>
    );
}