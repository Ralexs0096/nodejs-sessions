const express = require('express')
const { getUsers, createUser } = require('../controllers/users')
const router = express.Router()

router.get('/', getUsers)

module.exports = {
  userRoutes: router
}