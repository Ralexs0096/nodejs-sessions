const { users } = require("./users");

const currentRoles = users.map( user => user.role);

const getRoles = (req, res) => {
  res.json({ currentRoles })
}

const createNewRole = (req, res) => {
  const newRole = req.body.role;
   if(!newRole || currentRoles.includes(newRole)){
     return res.status(418).send({
     error:true,
      message: "New Role is already in used or the New Role is am empty string"
     })
  }
  return res.send({role: [...currentRoles, newRole]})
}

 
module.exports = {
  getRoles,
  createNewRole
}