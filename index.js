const fs = require('node:fs')
const yargs = require('yargs')

const fileName = 'tasks.txt'

const addTask = (description) => {
  const task = `${description}\n`

  fs.appendFile(`./${fileName}`, task, 'utf-8', (err) => {
    if (err) {
      console.log(err);
      return
    }
    console.log('Task added');
  })
}

const listTasks = () => {
  // TODO: handle non-existing tasks
  fs.readFile(`./${fileName}`, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return
    }
    console.log('Task List: ');
    console.log(data);
  })
}

// TODO: delete all tasks

yargs.command({
  command: 'add',
  describe: 'Add a new task',
  builder: {
    description: {
      describe: 'Task description',
      type: 'string'
    },
  },
  handler(argv) {
    addTask(argv.description)
  }

})

yargs.command({
  command: 'list',
  describe: 'List all tasks',
  handler() {
    listTasks()
  }
})

// TODO: delete all tasks - command

yargs.parse()