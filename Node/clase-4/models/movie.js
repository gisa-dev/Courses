import { randomUUID } from 'node:crypto'
import { readJSON } from '../utils.js'

const moviesJSON = readJSON('../movies.json')

export class MovieModel {
  static async getAll ({ genre }) {
    if (genre) {
      return moviesJSON.filter(movie => movie.genre.some(g => g.toLowerCase() === genre.toLocaleLowerCase()))
    }

    return moviesJSON
  }

  static async getById ({ id }) {
    const movie = moviesJSON.find(movie => movie.id === id)
    return movie
  }

  static async create ({ input }) {
    const newMovie = {
      id: randomUUID(),
      ...input
    }

    // esto no es REST, porque estamos guardando
    // el estado de la app en memoria
    moviesJSON.push(newMovie)
    return newMovie
  }

  static async delete ({ id }) {
    const movieIndex = moviesJSON.findIndex(movie => movie.id === id)
    if (movieIndex === -1) return false
    moviesJSON.splice(movieIndex, 1)
    return true
  }

  static async update ({ id, input }) {
    const movieIndex = moviesJSON.findIndex(movie => movie.id === id)

    if (movieIndex === -1) return false

    moviesJSON[movieIndex] = {
      ...moviesJSON[movieIndex],
      ...input
    }

    return moviesJSON[movieIndex]
  }
}
