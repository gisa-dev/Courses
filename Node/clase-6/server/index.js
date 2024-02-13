import express from 'express'
import logger from 'morgan'
import { Server } from 'socket.io'
import dotenv from 'dotenv'
import { createServer } from 'node:http'
import { createClient } from '@libsql/client'

dotenv.config()
const port = process.env.PORT ?? 1234

const app = express()
const server = createServer(app)
const io = new Server(server, {
  connectionStateRecovery: {
    maxDisconnectionDuration: 2000
  }
})

const db = createClient({
  url: process.env.DB_URL,
  authToken: process.env.DB_TOKEN
})

await db.execute(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT
  )
`)

io.on('connection', (socket) => {
  console.log('a user has connected')

  socket.on('disconnect', () => {
    console.log('a user has disconnected')
  })

  socket.on('chat message', async (msg) => {
    let result

    try {
      result = await db.execute({
        sql: 'INSERT INTO messages (content) VALUES (:msg)',
        args: { msg }
      })
    } catch (error) {
      console.log(error)
      return
    }
    io.emit('chat message', msg, result.lastInsertRowid.toString())
  })
})

app.use(logger('dev'))

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/client/index.html')
})

server.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`)
})
