const express = require('express')
const router = express.Router()

// import controller
const todo = require('../controllers/Todo')

// route for creating a new todo
router.get('/get-todo', todo.getTodo)
router.post('/create-todo', todo.createTodo)
router.put('/update-todo/:id', todo.updateTodo)


module.exports = router
