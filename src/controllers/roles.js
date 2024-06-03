const { users } = require("./users");

const getRoles = (req, res) => {
  const roles = users.map(user => user.role);
  res.json({ roles })
}

// TODO: Create a new Role
const newRole = (req,res) => {
  roles.push(req.body);
  res.send({
    id: roles.indexOf(roles.at(-1)),
    ...roles.at(-1)
  });
} 

module.exports = {
  getRoles,
  newRole
}