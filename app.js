const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
let command = process.argv[2];

console.log('Command: ', command);
// log out default process arguments
console.log('Process: ', process.argv);
// log out Yargs
console.log('Yargs!: ', argv);

switch (command) {
    case 'add':
        console.log('Adding new Note!');
        notes.addNote(argv.title, argv.body);
        break;
    case 'remove':
        console.log('Note Deleted.');
        break;
    case 'list':
        console.log('Here are your Notes: ');
        break;
    case 'read':
        console.log('Reading Note...');
        break;
    default:
        console.log('Command Not Recognized... \nPlease limit commands to: \nadd\nremove\nlist\nread');
};