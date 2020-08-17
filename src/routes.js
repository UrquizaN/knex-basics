const express = require('express')
const UserController = require('./controllers/UserController')
const ProjectController = require('./controllers/ProjectController')

const routes = express.Router()

routes
.get('/users', UserController.getUsers)
.post('/users', UserController.createUser)
.put('/users/:id', UserController.updateUser)
.delete('/users/:id', UserController.deleteUser)

.get('/projects', ProjectController.getProjects)
.post('/projects', ProjectController.createProject)


module.exports = routes