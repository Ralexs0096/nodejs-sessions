const { users } = require("./users");

const getRoles = (req, res) => {
  const roles = users.map(user => user.role);
  res.json({ roles })
}

// TODO: Create a new Role

const getName = (req, res) => {
  const names = user.map(user => user.name);
  res.json({names})
}

 
module.exports = {
  getName,
  getRoles
}