import { useContext } from "react";
import FamilyOne from "./FamilyOne";
import FamilyTwo from "./FamilyTwo";
import { CounterContext } from "./CounterProvider";

function FamilyApp() {
    const { count, ring } = useContext(CounterContext);

    return <div>
        <div>Bell Rang - {count}</div>
        <button onClick={ring}>Ring the bell!</button>
        <FamilyOne />
        <FamilyTwo />
    </div>
}

export default FamilyApp;