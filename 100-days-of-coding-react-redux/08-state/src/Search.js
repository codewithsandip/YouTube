import { useState } from "react";

function Search() {

    const [term, setTerm] = useState("");

    const onTermChange = (e) => {
        setTerm(e.target.value);
    }

    return (
        <div>
            <form>
                <input type="text"
                    value={term}
                    placeholder="Search for product..."
                    onChange={onTermChange} />
                <button>Search</button>
            </form>
        </div>
    )
}

export default Search;