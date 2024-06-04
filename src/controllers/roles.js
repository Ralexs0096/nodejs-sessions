const { users } = require("./users");

const getRoles = (req, res) => {
  const roles = users.map((user) => user.role);
  res.json({ roles });
};

// TODO: Create a new Role
const createRole = (req, res) => {
  const { role } = req.body;

  if (users.some((user) => user.role === role)) {
    //role already exists
    return res.status(400).json({ message: "This role already exists!" });
  }

  users.push({ role });

  return res
    .status(201)
    .json({ message: `New role ${role} has been created successfully` });
};

module.exports = {
  getRoles,
  createRole,
};
