import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(
    <div
        style={{
            height: '200px',
            width: '200px',
            backgroundColor: 'purple'
        }}
    />
);

// root.render(
//     <p className="message success">Data submitted successfully</p>
// );

// root.render(
//     <div>
//         <input type="number" />
//         <div>
//             <img src="https://picsum.photos/100/100" />
//         </div>
//     </div>
// );

// const count = 10;
// const name = "Sandip";
// const yes = true;
// const no = false;
// const age = undefined;
// const date = null;

// root.render(
//     <>
//         <ul>
//             <li>Count: {count}</li>
//             <li>Name: {name}</li>
//             <li>Truthy: {yes}</li>
//             <li>Falsy: {no}</li>
//             <li>Undefined: {age}</li>
//             <li>Null: {date}</li>
//         </ul>
//     </>
// );

// root.render(
//     <h1>{10 + 5}</h1>
// );

// const name = "Sandip";
// root.render(
//     <h1>Hello there! {name}</h1>
// );


// root.render(
//     <>
//         <h3>Contacts</h3>
//         <ul>
//             <li>Jimmy</li>
//             <li>Sonali</li>
//         </ul>
//     </>
// );