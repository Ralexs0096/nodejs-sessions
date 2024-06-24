const { users } = require("./users");

const existingRoles = users.map( user => user.role);

const getRoles = (req, res) => {
  const roles = users.map(user => user.role);
  res.json({ roles })
}

const createNewRole = (req, res) => {
  const newRole = req.body.role;
  if(newRole || existingRoles.includes(newRole)){
    return res.status().send({
      error:true,
      message: "New Role is already in used or the New Role is am empty string"
    })

    return res.send({role: [...existingRoles, newRole]})
  }
}

 
module.exports = {
  getRoles,
  createNewRole
}