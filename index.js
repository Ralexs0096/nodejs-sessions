const fs = require('node:fs')
const yargs = require('yargs')

const fileName = 'tasks.txt'

const addTask = (description) => {
    
    const task = `${description}\n`

    fs.appendFile(`./${fileName}`, task, 'utf-8', (err) => {
        if(err) {
            console.log(err);
            return
        }
        console.log('Task added');
    } )
}

const listTasks = () => {
    fs.readFile(`./${fileName}`, 'utf-8', (err, data) => {
        if(err) {
            console.log('File does not exist, please add a task to create a List file',err);
            return
        }

        if(data.length === 0){
                console.log ('Task list: There is no task on the list');
            }
        else{ 
                console.log('Task List: ');
                console.log(data);
            }
    })
}

const delListTasks = () => {
  
    fs.writeFile(`./${fileName}`, '', 'utf-8', (err) => {
        if (err){
            console.error(err);
            return;
        }
        console.log('Task are cleaned successfully')
    })
}

yargs.command({
    command: 'add',
    describe: 'Add a new task',
    builder: {
        description: {
            describe: 'Task description',
            type: 'string'
        }
    },
    handler(argv) {
        addTask(argv.description)
    }
})

yargs.command({
    command:'list',
    describe: 'List all tasks',
    handler() {
        listTasks()
    }
})

yargs.command({
    command:'clean',
    describe:'Clean all the task from file.txt',
    handler() {
        delListTasks()
    }
})

yargs.parse()
