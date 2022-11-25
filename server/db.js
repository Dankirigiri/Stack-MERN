import { createConnection } from 'mysql2/promise'

export const pool = createConnection(DATABASE_URL);
console.log("DB init")