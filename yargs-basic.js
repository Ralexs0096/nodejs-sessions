/**
 * YARGS:
 * 
 * https://yargs.js.org/docs/
 */

const yargs = require('yargs')

const sayHello = (name) => {
  console.log(`hello ${name}`);
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
  handler(argv) {
    sayHello(argv.name)
  }
})

yargs.parse()