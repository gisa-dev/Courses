const express = require('express')

const app = express()

app.disabled('x-powered-by')

app.get('/', (req, res) => {
  res.json({ message: 'hello world' })
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})
