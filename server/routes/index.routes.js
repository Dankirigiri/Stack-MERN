import {Router} from "express"
import { pool } from "../db.js";
const routes = Router();
routes.get('/ping', async (req, res) => {
    const [rows] = await (await pool).query("SELECT 1 + 1 as result")
    console.log(rows)
    res.json(rows)
})

export default routes