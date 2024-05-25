const express = require("express");
const routes = require("./routes");

class Server {
  constructor() {
    this.app = express();
    this.port = 3000;

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  routes() {
    routes.forEach(route => {
      this.app.use(route.path, route.route)
    })
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    })
  }
}

module.exports = Server