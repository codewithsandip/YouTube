import { useState } from "react";

import AddNote from "./AddNote";
import Header from "./Header";
import NoteList from "./NoteList";

import './App.css';

function App() {

    const [notes, setNotes] = useState([]);

    const addNewNote = note => {
        setNotes([...notes, note]);
    }

    const editNote = editNote => {
        const state = notes.map((note) => {
            if (note.id === editNote.id) {
                return { ...editNote };
            }
            return note;
        });

        setNotes([...state]);
    }

    return <div>
        <div className="container-fluid shadow">
            <div className="container">
                <Header />
            </div>
        </div>
        <div className="container-fluid">
            <div className="container section">
                <NoteList notes={notes} onEditNote={editNote} />
            </div>
        </div>
        <div className="container-fluid">
            <div className="container section">
                <AddNote onAddNote={addNewNote} />
            </div>
        </div>
    </div>
}

export default App;