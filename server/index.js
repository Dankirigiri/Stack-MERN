import express from "express";
import cors from "cors";
const app = express();
const PORT = 4000;

import indexRoutes from "./routes/index.routes.js"
import productsRoutes from "./routes/products.routes.js"

app.use(cors())
app.use(express.json())

app.use(indexRoutes)
app.use(productsRoutes)

app.listen(PORT)
console.log(`Server running on port ${PORT}`)