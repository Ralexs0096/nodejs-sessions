const users = [
  {
    "id": 1,
    "name": "Alexander ruiz",
    "email": "alex.cracke@codecrafterslabs.com",
    "role": "admin"
  },
  {
    "id": 2,
    "name": "Krys Ruiz",
    "email": "da.krys@codecrafterslabs.com",
    "role": "user"
  },
  {
    "id": 3,
    "name": "Alvison Hunter",
    "email": "alvison.hunter@codecrafterslabs.com",
    "role": "editor"
  },
  {
    "id": 4,
    "name": "Ezra Marcia",
    "email": "ezra.marcia@codecrafterslabs.com",
    "role": "Crack!"
  }
]

const getUsers = (req, res) => {
  res.send(users)
}


module.exports = {
  getUsers,
  users
}