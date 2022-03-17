const dotenv = require('dotenv')
const express = require('express');

//load config
dotenv.config({ path: './configs/config.env' })

const connectDB = require('./configs/db')
connectDB()



//middleware
const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//routes
app.use("/api/schedule", require('./logic/schedule'))


const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`server is running at port ${PORT}`))