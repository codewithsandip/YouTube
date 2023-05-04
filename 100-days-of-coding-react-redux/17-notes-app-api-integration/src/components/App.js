import { useState } from "react";

import axios from "axios";

import AddNote from "./AddNote";
import Header from "./Header";
import NoteList from "./NoteList";

import './App.css';

function App() {

    const [notes, setNotes] = useState([]);

    const createNote = async note => {
        const response = await axios.post(`http://localhost:3005/notes`, note);
        setNotes([...notes, response.data]);
    }

    const updateNote = editNote => {
        const state = notes.map((note) => {
            if (note.id === editNote.id) {
                return { ...editNote };
            }
            return note;
        });

        setNotes([...state]);
    }

    const deleteNote = id => {
        const state = notes.filter(note => note.id !== id);
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
                <NoteList notes={notes}
                    onEditNote={updateNote}
                    onDeleteNote={deleteNote} />
            </div>
        </div>
        <div className="container-fluid">
            <div className="container section">
                <AddNote onAddNote={createNote} />
            </div>
        </div>
    </div>
}

export default App;