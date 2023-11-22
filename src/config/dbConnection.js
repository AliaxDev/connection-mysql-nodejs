import mysql from 'mysql2/promise'

const DEFAULT_CONFIG = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'Aliaxdev1968.',
  database: 'contacts'
}

const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG

export const connection = await mysql.createConnection(connectionString)
