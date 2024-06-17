const yargs = require('yargs')

// const sayHello = () => {
//     console.log('Hello Krys, att: Ezra');
// }

// yargs.command({
//     command: 'hello',
//     describe: 'say hello',
//     builder: {
//       description: {
//         describe: 'this is a test',
//         type: 'string',
//       }, 
//     },
//     handler(argv){
//         sayHello()
//       }
// })

// yargs.parse()

const yargs = require('yargs')

const sayHello = (name) => {
    console.log(`Hello ${name}`);
}

yargs.command({
    command: 'hello',
    describe: 'say hello',
    builder: {
      description: {
        describe: 'this is a test',
        type: 'string',
      }, 
    },
    handler(argv){
        sayHello(argv.name)
      }
})

yargs.parse()