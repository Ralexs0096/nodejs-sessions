const express = require('express') // singleton
const router = express.Router()
const { getRoles, createNewRole } = require('../controllers/roles')



router.get('/', getRoles)
router.post('/', createNewRole)
module.exports = {
  rolesRoutes: router
}