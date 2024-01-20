import { Router } from 'express'
import { validateMovie, validatePartialMovie } from '../schemas/movies'
import { MovieModel } from '../models/movie'

export const moviesRouter = Router()

// * GETs
moviesRouter.get('/', async (req, res) => {
  const { genre } = req.query
  const moviesJSON = await MovieModel.getAll({ genre })
  res.json(moviesJSON)
})

moviesRouter.get('/:id', async (req, res) => {
  const { id } = req.params
  const movie = await MovieModel.getById({ id })

  if (movie) return res.json(movie)

  res.status(404).json({ error: 'Movie not found' })
})

// * POSTs
moviesRouter.post('/', async (req, res) => {
  const result = validateMovie(req.body)

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  const newMovie = await MovieModel.create({ input: result.data })
  res.status(201).json(newMovie)
})

// * PATCHs
moviesRouter.patch('/:id', async (req, res) => {
  const result = validatePartialMovie(req.body)

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  const { id } = req.params
  const updatedMovie = await MovieModel.update({ id, input: result.data })

  return res.json(updatedMovie)
})

// * DELETEs
moviesRouter.delete('/:id', async (req, res) => {
  const { id } = req.params

  const result = await MovieModel.delete({ id })

  if (result === false) return res.status(404).json({ error: 'Movie not found' })

  return res.status(204).send()
})
