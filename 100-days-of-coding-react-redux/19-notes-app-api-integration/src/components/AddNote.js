import { useState } from 'react';

import './AddNote.css';

import { generateUniqueId } from '../utils';

function AddNote({ onAddNote }) {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = evt => {
        evt.preventDefault();
        onAddNote({
            title: title,
            text: text
        });

        setTitle("");
        setText("");
    }

    return <div className="add-note">
        <h2>Add New Note</h2>
        <form onSubmit={handleSubmit}>
            <div className='title'>
                <label htmlFor="title">Title</label>
                <input id="title" type="text"
                    value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className='text'>
                <label htmlFor="text">Text</label>
                <textarea id="text"
                    value={text} onChange={e => setText(e.target.value)}></textarea>
            </div>
            <div>
                <button className='add-note-button'>Submit</button>
            </div>
        </form>
    </div>
}

export default AddNote;