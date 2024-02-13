import express, { json } from 'express'
import { createMovieRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'

// Como leer un archivo JSON en ESModules
// import fs from 'node:fs'
// const moviesJSON = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

export const createApp = ({ movieModel }) => {
  const app = express()
  app.use(json())
  app.use(corsMiddleware())

  app.disable('x-powered-by')

  // metodos normales: GET/HEAD/POST
  // metodos complejos: PUT/PATCH/DELETE

  // CORS PRE-FLIGHT
  // OPTIONS

  app.use('/movies', createMovieRouter({ movieModel }))

  const PORT = process.env.PORT ?? 1234

  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
  })
}
