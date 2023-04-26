import { useState } from "react";

function App() {

    const [a, setA] = useState();
    const [b, setB] = useState();
    const [c, setC] = useState();

    const update = () => {
        setA(10);
        setB(20);
        setC(30);
    }

    console.log(a);
    console.log(b);
    console.log(c);

    return (
        <>
            <div>a: {a}</div>
            <div>b: {b}</div>
            <div>c: {c}</div>
            <button
                onClick={() => update()}>
                Click Me!
            </button>
        </>
    )
}

export default App;