const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 4001

// middleware to parse json request body
app.use(express.json())

// mounting of todo routes
const todoRoutes = require('./routes/todo')
app.use('/api/v1', todoRoutes)

// database connection
const dbconnect = require('./config/database')
dbconnect()

// default route
app.get('/', (req, res) => {
    res.send('Server is running...')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
