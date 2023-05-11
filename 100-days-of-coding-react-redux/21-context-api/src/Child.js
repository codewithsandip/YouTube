import { useContext } from "react";
import { CounterContext } from "./CounterProvider";

function Child() {
    const { ring } = useContext(CounterContext);
    return <div>
        Child:
        <button onClick={ring}>Ring the bell!</button>
    </div>
}

export default Child;