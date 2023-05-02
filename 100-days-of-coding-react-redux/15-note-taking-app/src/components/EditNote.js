import { useState } from 'react';
import './EditNote.css';

function EditNote({ id, title, text, onEditNote }) {

    const [editTitle, setTitle] = useState(title);
    const [editText, setText] = useState(text);

    const handleSubmit = evt => {
        evt.preventDefault();
        onEditNote({ id: id, title: editTitle, text: editText });
    }

    return <div className="edit-note">
        <form onSubmit={handleSubmit}>
            <div className='title'>
                <input id="title"
                    type="text"
                    placeholder='Title'
                    value={editTitle}
                    onChange={e => setTitle(e.target.value)} />
            </div>
            <div className='text'>
                <textarea id="text"
                    placeholder="Text"
                    value={editText}
                    onChange={e => setText(e.target.value)}>
                </textarea>
            </div>
            <div>
                <button className='edit-note-button'>Update</button>
            </div>
        </form>
    </div>
}

export default EditNote;