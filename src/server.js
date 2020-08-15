const express = require('express')
const routes = require('./routes')

const server = express()

server.use(express.json())
server.use(routes)

// not found 404
server.use( (req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

// Cathc all
server.use( (error, req, res, next) => {
    res.status(error.status || 500)
    res.json({ error: error.message })
})

server.listen(3333, () => console.log('Server is running'))