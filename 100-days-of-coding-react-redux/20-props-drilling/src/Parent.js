import Child from "./Child";

function Parent({ ringTheBell }) {
    return <div>
        Parent:
        <Child ringTheBell={ringTheBell} />
    </div>
}

export default Parent;