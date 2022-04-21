const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
    let notes = loadNotes();
    const duplicateNotes = notes.find((note) => note.title === title)
    if(!duplicateNotes) {
        notes.push({
        title: title,
        body: body
    })
    console.log(chalk.green.inverse('Note saved successfully.'))
    }
    else {
        console.log(chalk.red.inverse('Title already exist!'))
    }

    saveNotes(notes);
};

const saveNotes = (notes) => {
    const data = JSON.stringify(notes);
    fs.writeFileSync("notes.json", data);
};

const loadNotes = () => {
    try {
        const buffer = fs.readFileSync("notes.json");
        const notes = JSON.parse(buffer.toString());
        return notes;
    } catch (e) {
        console.log(chalk.red.inverse('No notes file found.'))
        return [];
    }
};
const removeNote = (title) => {
    const notes = loadNotes();
    const remainingNotes = notes.filter((note) => note.title != title)
    notes.length != remainingNotes.length ? console.log(chalk.green.inverse('Note removed successfully')) : console.log(chalk.red.inverse('No note with title: ' + title))
    saveNotes(remainingNotes);
}

const listNotes = () => { 
    const notes = loadNotes();
    notes.forEach((note) => {
        console.log(chalk.green.inverse(note.title))
    })

}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title)
    if(note) {
        console.log(chalk.green.inverse(note.title))
        console.log(note.body)
    }
    else {
        console.log(chalk.red.inverse('No note found with title: ' + title))
    }
}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};

