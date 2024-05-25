const { users } = require("./users");

const getRoles = (req, res) => {
  const roles = users.map(user => user.role);
  res.json({ roles })
}

// TODO: Create a new Role

module.exports = {
  getRoles
}