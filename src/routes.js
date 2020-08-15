const express = require('express')
const UserController = require('./controllers/UserController')

const routes = express.Router()

routes.get('/users', UserController.getUsers)
routes.post('/users', UserController.createUser)
routes.put('/users/:id', UserController.updateUser)
routes.delete('/users/:id', UserController.deleteUser)

module.exports = routes