import React, { useEffect } from 'react';

function Dom() {
    useEffect(() => {
        document.title = "Code with Sandip";
    }, []);

    return (
        <div>
            <h1>This is an example of updating the DOM using useEffect.</h1>
        </div>
    )
}

export default Dom;
