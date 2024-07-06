const fs = require("node:fs");
const yargs = require("yargs");

const fileName = "tasks.txt";

const addTask = (description) => {
  const task = `${description}\n`;

  fs.appendFile(`./${fileName}`, task, "utf-8", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Task added");
  });
};

const listTasks = () => { 
  fs.readFile(`./${fileName}`, "utf-8", (err, data) => {
    if (data === "") {
      return console.log("No tasks found");
    }
    if (err) {
      console.log(err);

      return;
    }
    console.log("Task List: ");
    console.log(data);
  });
};
 

const deleteAllTasks = () => {
  fs.writeFile(`./${fileName}`, "", "utf-8", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("All task has been deleted.");
  });
};

yargs.command({
  command: "add",
  describe: "Add a new task",
  builder: {
    description: {
      describe: "Task description",
      type: "string",
    },
  },
  handler(argv) {
    addTask(argv.description);
  },
});

yargs.command({
  command: "list",
  describe: "List all tasks",
  handler() {
    listTasks();
  },
});
 

yargs.command({
  command: "delete-all",
  describe: "Delete all tasks",
  handler() {
    deleteAllTasks();
  },
});

yargs.parse();
