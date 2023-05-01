import Note from "./Note";

function NoteList({ notes, onEditNote }) {

    const renderNotes = notes.map(({ id, title, text }) =>
        <Note key={id} id={id} title={title} text={text} onEditNote={onEditNote} />)

    return <section className="all-notes">
        {renderNotes}
    </section>
}

export default NoteList;