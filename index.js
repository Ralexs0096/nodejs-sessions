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

const handleTasks = (fileName) => {
  if (!fs.existsSync(`./${fileName}`)) {
    console.log("A tasks file does not exist.");
    return false;
  }

  if (fs.statSync(`./${fileName}`).size == 0) {
    console.log(`Tasks file ${fileName} is empty.`);
    return false;
  }

  return true;
};

const listTasks = () => {
  if (!handleTasks(fileName)) {
    return;
  }

  fs.readFile(`./${fileName}`, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Task List: ");
    console.log(data);
  });
};

const deleteTasks = () => {
  if (!handleTasks(fileName)) {
    return;
  }

  fs.truncate(`./${fileName}`, 0, () => console.log("Tasks deleted!"));
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
  command: "delete",
  describe: "Delete all tasks",
  handler() {
    deleteTasks();
  },
});

yargs.parse();