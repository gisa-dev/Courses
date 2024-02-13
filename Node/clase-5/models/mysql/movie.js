import mysql from 'mysql2/promise'

const config = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'moviesdb',
  port: 3306
}

const connection = await mysql.createConnection(config)

export class MovieModel {
  static async getAll ({ genre }) {
    const [movies] = await connection.query('SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id FROM movie;')

    return movies
  }

  static async getById ({ id }) {
    const [movies] = await connection.query('SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id FROM movie WHERE id = UUID_TO_BIN(?);', [id])

    if (movies.length === 0) return null

    return movies[0]
  }

  static async create ({ input }) {
    const {
      title,
      year,
      director,
      duration,
      rate,
      poster,
      genre: genreInput
    } = input

    const [uuidResult] = await connection.query('SELECT UUID() uuid;')
    const [{ uuid }] = uuidResult

    try {
      await connection.query(`
      INSERT INTO movie (id, title, year, director, duration, rate, poster)
      VALUES (UUID_TO_BIN("${uuid}"), ?, ?, ?, ?, ?, ?);`,
      [title, year, director, duration, rate, poster])
    } catch (err) {
      throw new Error('Error creating movie')
    }

    const [createdMovie] = await connection.query('SELECT BIN_TO_UUID(id) id, title, year, director, duration, poster, rate FROM movie WHERE id = UUID_TO_BIN(?)', [uuid])

    return createdMovie[0]
  }

  static async update ({ id, input }) {
    try {
      await connection.query(`
      UPDATE movie
      SET ?
      WHERE id = UUID_TO_BIN(?);`,
      [input, id])
    } catch (err) {
      throw new Error('Error updating movie')
    }

    const [updatedMovie] = await connection.query('SELECT BIN_TO_UUID(id) id, title, year, director, duration, poster, rate FROM movie WHERE id = UUID_TO_BIN(?)', [id])

    return updatedMovie[0]
  }

  static async delete ({ id }) {
    try {
      await connection.query('DELETE FROM movie WHERE id = UUID_TO_BIN(?);', [id])
    } catch (err) {
      throw new Error('Error deleting movie')
    }

    return true
  }
}
