console.log('Noted ;)')

const fs = require('fs');

var fetchNotes = () => {

    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    };

};

var getAll = () => {
    console.log('Getting All Notes!');
    var notes = fetchNotes();
    return notes;
};

var getNote = (title) => {
    // fetch notes
    var notes = fetchNotes();
    // filter notes matching title (0 or 1) 
    var foundNote = notes.filter((note) => note.title === title);
    // and return that note [0]
    return foundNote[0];
};

var removeNote = (title) => {
    // fetch notes
    var notes = fetchNotes();
    // filter notes, removing the one with the title of argument
    var filteredNotes = notes.filter((note) => note.title !== title);
    // save new notes array
    saveNotes(filteredNotes);
    console.log('Removing Note ', title);

    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};