const express = require('express') // singleton
const router = express.Router()
const { getRoles, getName } = require('../controllers/roles')

router.get('/', getRoles)
// TODO: new role
router.post('/', getName)

module.exports = {
  rolesRoutes: router
}