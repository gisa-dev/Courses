import { Router } from 'express'
import { MovieController } from '../controllers/movies.js'

export const createMovieRouter = ({ movieModel }) => {
  const moviesRouter = Router()

  const movieController = new MovieController({ movieModel })

  // * GETs
  moviesRouter.get('/', movieController.getAll)

  moviesRouter.get('/:id', movieController.getById)

  // * POSTs
  moviesRouter.post('/', movieController.create)

  // * PATCHs
  moviesRouter.patch('/:id', movieController.update)

  // * DELETEs
  moviesRouter.delete('/:id', movieController.delete)

  return moviesRouter
}
