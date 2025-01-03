// import Todo model
const Todo = require('../models/Todo')

exports.getTodo = async (req, res) => {
    try {
        const todos = await Todo.find({})
        return res.status(200).json({
            sucess: true,
            message: 'Todo fetched successfully',
            data: todos,
        })
    } catch (error) {
        console.log('Error in fetching Todos.....')
        console.log(error.message)
        res.status(500).json({
            sucess: false,
            message: 'Internal Server Error',
        })
    }
}

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

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)

        const { title, description } = req.body

        const updateTodo = await Todo.findByIdAndUpdate(
            { _id: id },
            {
                title,
                description,
                updated_at: Date.now(),
            },
            { new: true }
        )

        console.log('updateTodo......', updateTodo)
        res.status(200).json({
            sucess: true,
            message: 'Todo updated successfully',
            data: updateTodo,
        })
    } catch (error) {
        console.log('Error in updating todo.....')
        console.error(error.message)
        res.status(500).json({
            sucess: false,
            message: 'Internal Server Error',
        })
    }
}
