import { createConnection } from 'mysql2/promise'
import { DATABASE_URL } from './config.js';

export const pool = createConnection(DATABASE_URL);
console.log("DB init")