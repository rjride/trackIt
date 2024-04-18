import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './db/db.js'

const app = express()

dotenv.config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

app.get('/', (req,res)=> {
    res.send('Hello World')
})

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log(`Connnected to port ${PORT}`);
    })
}

server()