const http = require('node:http')
const { findAvailablePort } = require('./11.free-port.js')

const desiredPort = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hello World')
})

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () =>
    console.log(`Server running on port http://localhost:${port}`)
  )
})
