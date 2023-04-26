function EditNote() {
    return <div>
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
                <button>Update</button>
            </div>
        </form>
    </div>
}

export default EditNote;