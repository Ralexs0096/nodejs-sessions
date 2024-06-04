const express = require('express') // singleton
const router = express.Router()
const { getRoles, newRole } = require('../controllers/roles')

router.get('/', getRoles)
// TODO: new role
router.post('/', newRole)

module.exports = {
  rolesRoutes: router
}