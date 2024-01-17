const express = require('express')
const dittoJSON = require('./pokemon/ditto.json')

const PORT = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')

app.use(express.json())

// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()

//   if (req.headers['content-type'] !== 'application/json') return next()

//   // solo llegan request POST con content-type application/json
//   let body = ''

//   req.on('data', (chunk) => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     // mutar la request y meter la informacion en el req.body
//     req.body = data
//     next()
//   })
// })

app.get('/pokemon/ditto', (req, res) => {
  res.json(dittoJSON)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

// la ultima a la que va a llegar
app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found </h1>')
})

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})
