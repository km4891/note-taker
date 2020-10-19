const fs = require('fs');
const util = require('util');
const readNotes = util.promisify(fs.readFile);
const writeNotes = util.promisify(fs.writeFile);

class Notes {
    constructor() {
        this.lastId = 0;
    }

    read() {
        return readNotes('db/db.json', 'utf8');
    }

    write(note) {
        return writeNotes('db/db.json', JSON.stringify(note));
    }
    
    allNotes() {
        return this.read()
        .then(notes => {
            let parsedNotes;
            //if not an array or can't be turned into one, kick back empty array
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            }
            catch (err) {
                parsedNotes = [];
            }
            return parsedNotes;
        });      
    } 

    addNote(note) {
        const { title, text } = note;

        if (!title || !text) {
            throw new Error("Title/Text cannot be empty!");
        }

        // Increment lastId and to assign it
        const newNote = { title, text, id: ++this.lastId };

        return this.allNotes()
            .then(notes => [...notes, newNote])
            .then(updatedNotes => this.write(updatedNotes))
            .then(() => newNote);

    }

    
    removeNote(id) {
        return this.allNotes()
            .then(notes => notes.filter(note => note.id !==parseInt(id)))
            .then(filteredNotes => this.write(filteredNotes));
    }
}

module.exports = new Notes();