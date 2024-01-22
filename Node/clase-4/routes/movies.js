import { Router } from 'express'
import { MovieController } from '../controllers/movies.js'

export const moviesRouter = Router()

// * GETs
moviesRouter.get('/', MovieController.getAll)

moviesRouter.get('/:id', MovieController.getById)

// * POSTs
moviesRouter.post('/', MovieController.create)

// * PATCHs
moviesRouter.patch('/:id', MovieController.update)

// * DELETEs
moviesRouter.delete('/:id', MovieController.delete)
