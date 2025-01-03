// import Todo model
const Todo = require('../models/Todo')

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body

        // check if the title and description fields are not empty
        if (!title || !description) {
            return res.status(400).json({
                message: 'Please fill all fields',
            })
        }

        // create a new todo and insert it into the database
        const response = await Todo.create({
            title,
            description,
        })

        // send a success response to the client
        res.status(201).json({
            sucess: true,
            message: 'Todo created successfully',
            data: response,
        })
    } catch (error) {
        console.log('Error in creating todo.....'), console.error(error.message)
        res.status(500).json({
            sucess: false,
            message: 'Internal Server Error',
        })
    }
}
