import './Note.css';
import EditIcon from '../icons/edit.svg';
import DeleteIcon from '../icons/delete.svg';

import EditNote from './EditNote';
import { useState } from 'react';

function NoteView({ id, title, text, onEditNote, onDeleteNote }) {
    return <div className="note">
        <div className="note-header">
            <h2>{title}</h2>
            <button className="edit-button"
                onClick={onEditNote}>
                <img src={EditIcon} />
            </button>
            <button className="delete-button"
                onClick={() => onDeleteNote(id)}>
                <img src={DeleteIcon} />
            </button>
        </div>
        <div className="note-body">
            <p>{text}
            </p>
        </div>
    </div>
}

function EditNoteView({ id, title, text, onEditNote }) {
    return <EditNote id={id} title={title} text={text} onEditNote={onEditNote} />
}

function Note({ id, title, text, onEditNote, onDeleteNote }) {

    const [showEditNoteView, setEditNoteView] = useState(false);

    const handleEditNote = () => {
        setEditNoteView(!showEditNoteView);
    }

    const handleNoteEdit = note => {
        setEditNoteView(false);
        onEditNote(note);
    }

    const renderNoteView = !showEditNoteView
        ? <NoteView id={id}
            title={title}
            text={text}
            onEditNote={handleEditNote}
            onDeleteNote={onDeleteNote} />
        : <EditNoteView id={id} title={title} text={text}
            onEditNote={handleNoteEdit} />

    return <>{renderNoteView}</>
}

export default Note;