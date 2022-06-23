const fs = require("fs");
class Notes {

    readNotes() {
        const data = fs.readFileSync("data.json");
        const notes = JSON.parse(data.toString())
        
        return notes;
    }
    search(id) {
        const data = this.readNotes();
        const oneNote = data.filter(note => note.id === id)
        return oneNote;
    }
    // Update
    // Insert
    // Delete
    // Search **
    // Read **
}

module.exports = Notes;