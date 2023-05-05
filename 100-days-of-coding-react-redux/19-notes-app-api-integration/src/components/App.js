import { useState, useEffect } from "react";

import axios from "axios";

import AddNote from "./AddNote";
import Header from "./Header";
import NoteList from "./NoteList";

import './App.css';

function App() {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getAllNotes();
    }, []);

    const getAllNotes = async () => {
        const response = await axios.get(`http://localhost:3005/notes`);
        setNotes(response.data);
    }

    const createNote = async note => {
        const response = await axios.post(`http://localhost:3005/notes`, note);
        setNotes([...notes, response.data]);
    }

    const updateNote = async editNote => {
        const response = await axios.put(`http://localhost:3005/notes/${editNote.id}`, {
            title: editNote.title,
            text: editNote.text
        });

        const updatedNotes = notes.map((note) => {
            if (note.id === response.data.id) {
                return { ...editNote };
            }
            return note;
        });

        setNotes([...updatedNotes]);
    }

    const deleteNote = async id => {
        const response = await axios.delete(`http://localhost:3005/notes/${id}`);
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes([...updatedNotes]);
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