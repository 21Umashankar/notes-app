import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import noteRoute from './routes/note.route.js'
import cors from "cors"

const app = express()
dotenv.config()
const port = process.env.PORT || 4002

// DB connection code
try {
  mongoose.connect(process.env.MONGO_URL)
  console.log('connected to DB')
  } catch (error) {
  console.error('Error connecting to DB:', error)
}

app.get("/", (req, res) => {
  res.send("Server is running successfully 🚀");
});

// Middleware
app.use(express.json())
app.use(cors())
app.use("/api/v1/noteapp", noteRoute)

app.listen(port, () => {
  console.log(`this server is running on ${port}`)
})
