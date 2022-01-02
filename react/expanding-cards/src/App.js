import React from "react";

import ExpandingCards from "./ExpandingCards";

const images = [
    { 
        id: 1,
        title: "Golden Leaves",
        url: "https://images.unsplash.com/photo-1634899904258-e698a7495c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2788&q=80",
        active: true 
    },
    { 
        id: 2,
        title: "Wild Animal",
        url: "https://images.unsplash.com/photo-1634864053102-413f73fd1013?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=796&q=80",
        active: false 
    },
    { 
        id: 3,
        title: "Living Room",
        url: "https://images.unsplash.com/photo-1634913940751-8137fb1e40b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        active: false 
    },
    { 
        id: 4,
        title: "Great Photography",
        url: "https://images.unsplash.com/photo-1635051784209-7baa27b7fbf0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80",
        active: false 
    },
    { 
        id: 5,
        title: "Tall Building",
        url: "https://images.unsplash.com/photo-1634962453938-85e70143f61d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=792&q=80",
        active: false 
    }
];

const App = () => {
    return <ExpandingCards data={images} />
}

export default App;