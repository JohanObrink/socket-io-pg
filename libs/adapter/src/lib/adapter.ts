import { Pool } from 'pg'
import { createAdapter } from '@socket.io/postgres-adapter'

const { DB_HOST, DB_PASS, DB_USER, DB_DATABASE } = process.env

export const pool = new Pool({
  database: DB_DATABASE,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
})

export const adapter = createAdapter(pool)
