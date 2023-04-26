import React, { useState, useEffect } from "react";
import axios from "axios";

function Posts() {
    const [data, setData] = useState([]);

    const fetchData = async function () {
        const results = await axios('https://jsonplaceholder.typicode.com/posts');
        setData(results.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>My Posts</h1>
            <h1>{data.length > 0 && data[0].title}</h1>
        </div>
    );
}

export default Posts;