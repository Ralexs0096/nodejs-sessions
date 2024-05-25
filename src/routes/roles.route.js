const express = require('express') // singleton
const router = express.Router()
const { getRoles } = require('../controllers/roles')

router.get('/', getRoles)
// TODO: new role

module.exports = {
  rolesRoutes: router
}