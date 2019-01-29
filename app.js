const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};
const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;

var command = argv._[0];

/*
console.log('Command: ', command);
// log out default process arguments
console.log('Process: ', process.argv);
// log out Yargs
console.log('Yargs!: ', argv);
*/

switch (command) {
    case 'add':
        console.log('Adding new Note!');
        var note = notes.addNote(argv.title, argv.body);
        notes.logNote(note);
        break;
    case 'remove':
        var noteRemoved = notes.removeNote(argv.title);
        var message = noteRemoved ? 'Note Removed' : 'Note not found';
        console.log(message);
        break;
    case 'list':
        var allNotes = notes.getAll();
        console.log(`printing ${allNotes.length} note(s).\n`);
        allNotes.forEach((note) => {
            notes.logNote(note);
        });
        break;
    case 'read':
        var note = notes.getNote(argv.title);
        notes.logNote(note);
        //var message = note ? `Note found:\n${note.title}\n${note.body}` : `${argv.title} not found`;
        //console.log(message);
        break;
    default:
        console.log('Command Not Recognized... \nPlease limit commands to: \nadd\nremove\nlist\nread');
};