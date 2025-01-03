const express = require('express')
const router = express.Router()

// import controller
const todo = require('../controllers/Todo')

// route for creating a new todo
router.post('/create-todo', todo.createTodo)

module.exports = router
