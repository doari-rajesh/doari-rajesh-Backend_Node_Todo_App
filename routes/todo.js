const express = require('express')
const router = express.Router()

// import controller
const todo = require('../controllers/Todo')

// routes for creating a new todo || getting all todos || getting a todo by id || updating a todo || deleting a todo
router.get('/get-todo', todo.getTodo)
router.get('/get-todo/:id', todo.getTodoById)
router.post('/create-todo', todo.createTodo)
router.put('/update-todo/:id', todo.updateTodo)
router.delete('/delete-todo/:id', todo.deleteTodo)

module.exports = router
