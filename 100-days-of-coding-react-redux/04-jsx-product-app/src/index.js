import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(
    <div>
        <h1>Products</h1>
        <div style={{
            display: "flex",
            gap: "20px"
        }}>
            <div style={{
                padding: "10px",
                border: "2px solid black"
            }}>
                <img src="https://picsum.photos/200" alt="product 1" />
                <h2>Product 1 title</h2>
                <p>product 1 description...</p>
                <p>$20</p>
            </div>
            <div style={{
                padding: "10px",
                border: "2px solid black"
            }}>
                <img src="https://picsum.photos/200" alt="product 2" />
                <h2>Product 2 title</h2>
                <p>product 2 description...</p>
                <p>$210</p>
            </div>
            <div style={{
                padding: "10px",
                border: "2px solid black"
            }}>
                <img src="https://picsum.photos/200" alt="product 3" />
                <h2>Product 3 title</h2>
                <p>product 3 description...</p>
                <p>$59</p>
            </div>
        </div>
    </div>
);