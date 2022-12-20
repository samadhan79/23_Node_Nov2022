const yargs = require('yargs')
const note = require('./note')
yargs.command({
    command: 'add',
    describe: 'This is Add Command',
    builder: {
        name: {
            describe: 'Enter Your  Name',
            demandOption: true,
            type: 'String'
        },

    },
    handler(args) {
        note.AddNote(args.name)
    }

})
yargs.command({
    command: 'remove',
    describe: 'This is Remove Command',
    builder: {
        name: {
            describe: 'Enter Your  Name',
            demandOption: true,
            type: 'String'
        },

    },
    handler(args) {
       note.removeNote(args.name)
    }

})
yargs.command({
    command: 'update',
    describe: 'This is Update Command',
    builder: {
        name: {
            describe: 'Enter Your  Name',
            demandOption: true,
            type: 'String'
        },
        newname: {
            describe: 'Enter Your  Name',
            demandOption: true,
            type: 'String'
        },

    },
    handler(args) {
       note.UpdateNote(args)
    }

})
yargs.parse()