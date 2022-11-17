require("dotenv").config();
import { createConnection } from 'mysql2/promise'

export const pool = createConnection(process.env.DATABASE_URL);
console.log("DB init")