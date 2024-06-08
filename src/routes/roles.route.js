const express = require('express') // singleton
const router = express.Router()
const { getRoles, createRole } = require('../controllers/roles')

router.get('/', getRoles)

// TODO: new role
router.post('/createRole', createRole)

module.exports = {
  rolesRoutes: router
}