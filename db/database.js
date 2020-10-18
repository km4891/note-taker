const { json } = require('express');
const fs = require('fs');
const util = require('util');
const readNotes = util.promisify(fs.readFile);
const writeNotes = util.promisify(fs.writeFile);

class Notes {

allNotes() {
    return readNotes('db/db.json', 'utf8')
    .then(allNotes => {
        // let data = [].concat(JSON.parse(allNotes))
        return JSON.parse(allNotes);
    })
}


}

module.exports = new Notes();