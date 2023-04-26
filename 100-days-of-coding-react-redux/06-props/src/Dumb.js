function Dumb(props) {
    const { title, onAct } = props;

    return <div>
        <h2>{title}</h2>
        <button onClick={onAct}>Click Me!</button>
    </div>
}

export default Dumb;