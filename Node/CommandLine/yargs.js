const yargs = require('yargs')
yargs.command({
    command: 'add',
    describe: 'This is Add Command',
    builder: {
        number1: {
            describe: 'Enter Number1',
            demandOption: true,
            type: 'Number'
        },
        number2: {
            describe: 'Enter Number2',
            demandOption: true,
            type: 'Number'
        }
    },
    handler(args){
        console.log(args.number1 + args.number2)
    }

})
yargs.parse()