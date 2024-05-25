const { userRoutes } = require('./user.route.js')
const { rolesRoutes } = require("./roles.route.js")

const routes = [
  {
    path: '/users',
    route: userRoutes
  },
  {
    path: '/roles',
    route: rolesRoutes
  },
]

module.exports = routes