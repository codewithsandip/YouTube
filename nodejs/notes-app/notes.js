const fs = require('fs');
const chalk = require('chalk');

const readNotes = () => {
    const notesBuffer = fs.readFileSync('notes.json');
    return JSON.parse(notesBuffer.toString());
}

const createNote = (title, body) => {
    return { title: title, body: body };
}

const writeNotes = (data) => {
    fs.writeFileSync('notes.json', JSON.stringify(data));
}

const checkDuplicateNote = (notes, title) => {
    return notes.find((n) => n.title === title);
}

const add = (title, body) => {
    const notes = readNotes();
    const note = createNote(title, body);
    const isDuplicate = checkDuplicateNote(notes, note.title);
    if (isDuplicate === undefined) {
        notes.unshift(note);
        writeNotes(notes);
        console.log(chalk.green.inverse('New note added'));
    } else {
        console.log(chalk.red.inverse('Note already added'));
    }
    
}

const remove = title => {
    const notes = readNotes();
    const newNotes = notes.filter((note) => note.title !== title);
    writeNotes(newNotes);
    console.log(chalk.green.inverse('Note is removed'))
}

const list = () => {
    const notes = readNotes();
    console.log(chalk.inverse('All notes:'))
    console.log(notes);
}

const read = title => {
    const notes = readNotes();
    const note = notes.filter((note) => note.title === title)
    console.log(chalk.green.inverse('Note'))
    console.log(note[0]);
}

module.exports = {
    add,
    remove,
    list,
    read
};