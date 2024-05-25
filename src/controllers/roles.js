const { users } = require("./users");

const getRoles = (req, res) => {
  const roles = users.map(user => user.role);
  res.json({ roles })
}

// TODO: Create a new Role and respond with the same data
// TODO: testing
module.exports = {
  getRoles
}