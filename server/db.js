import { createConnection } from 'mysql2/promise'

export const pool = createConnection('mysql://fs58lwnqcl3sabldbkpu:pscale_pw_nFamtziI5T0iGsvPaWL24jtxaijg3f1MRJWm6f2WGwx@us-east.connect.psdb.cloud/prueba?ssl={"rejectUnauthorized":true}');
console.log("DB init")