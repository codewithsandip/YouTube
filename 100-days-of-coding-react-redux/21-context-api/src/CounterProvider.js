import { createContext, useState } from "react";

const CounterContext = createContext();

function CounterProvider({ children }) {
    const [bellCount, setBellCount] = useState(0);

    const ringTheBell = () => {
        setBellCount(bellCount + 1);
    }

    const valueToShare = {
        count: bellCount,
        ring: ringTheBell
    }

    return <CounterContext.Provider value={valueToShare}>
        {children}
    </CounterContext.Provider>
}

export default CounterProvider;
export { CounterContext };