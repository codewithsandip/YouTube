import { useState } from "react";
import FamilyOne from "./FamilyOne";
import FamilyTwo from "./FamilyTwo";

function FamilyApp() {
    const [bellCount, setBellCount] = useState(0);

    const ringTheBell = () => {
        setBellCount(bellCount + 1);
    }

    return <div>
        <div>Bell Rang - {bellCount}</div>
        <button onClick={ringTheBell}>Ring the bell!</button>
        <FamilyOne />
        <FamilyTwo ringTheBell={ringTheBell} />
    </div>
}

export default FamilyApp;