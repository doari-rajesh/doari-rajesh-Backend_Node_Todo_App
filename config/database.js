const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config()

const dbconnect = async () => {
    await mongoose
        .connect(process.env.DATABASE_URL, {
        })
        .then(() => console.log('Connected to Database'))
        .catch((error) => {
            console.log('Error connecting to database.....')
            console.error(error.message)
            process.exit(1)
        })
}

module.exports = dbconnect
