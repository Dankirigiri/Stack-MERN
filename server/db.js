import { createConnection } from 'mysql2/promise'

export const pool = createConnection('mysql://ahbn41353aqyv1ly746k:pscale_pw_iwa5Uj6xH5dM5KqeMY7WwdkOc5sRlbmAzviuoIGIz@us-east.connect.psdb.cloud/prueba?ssl={"rejectUnauthorized":true}');
console.log("DB init")