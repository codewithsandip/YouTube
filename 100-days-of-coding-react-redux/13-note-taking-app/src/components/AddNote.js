function AddNote() {
    return <div>
        <h2>Add New Note</h2>
        <form>
            <div>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" />
            </div>
            <div>
                <label htmlFor="text">Text</label>
                <textarea id="text"></textarea>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
}

export default AddNote;