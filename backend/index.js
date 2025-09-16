import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import noteRoutes from './routes/note.route.js'

const app = express()
dotenv.config()
const port = process.env.PORT || 4002


//Database connection code
try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error to connect Mongodb",error);
    
}

//Routing middelwares
app.use(express.json())
app.use("/api/v1/noteapp",noteRoutes)

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, (req, res) => {
    console.log(`server is listing on port ${port}`);
    
})