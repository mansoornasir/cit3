const yargs = require('yargs');
const notes = require('./notes')


yargs.command({
    command: 'add',
    describe: 'add a note',
    builder: {
        title: {
            describe: 'Notes title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Notes body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Remove note',
            demandOption: true,
            type:'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function () {
        notes.listNotes();
    }
})
yargs.command({
    command: 'read',
    describe: 'edit a note',
    builder: {
        title: {
            describe: 'Read a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title);
    }
})

yargs.parse();
