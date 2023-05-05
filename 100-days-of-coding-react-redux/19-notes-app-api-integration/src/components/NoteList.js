import Note from "./Note";

function NoteList({ notes, onEditNote, onDeleteNote }) {

    const renderNotes = notes.map(({ id, title, text }) =>
        <Note key={id} id={id} title={title} text={text}
            onEditNote={onEditNote}
            onDeleteNote={onDeleteNote} />)

    return <section className="all-notes">
        {renderNotes}
    </section>
}

export default NoteList;