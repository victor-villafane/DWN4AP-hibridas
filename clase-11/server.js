import express from "express"
import ProductosRouter from "./routes/productos.route.js"
import ProductoApiRouter from "./api/routes/productos.api.routes.js"
import PersonajesRouter from "./routes/personajes.route.js"
import PersonajesApiRouter from "./api/routes/personajes.api.routes.js"
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use( "/index", express.static("public") )

app.use("/productos", ProductosRouter)
app.use("/api/productos", ProductoApiRouter)
app.use("/personajes", PersonajesRouter)
app.use("/api/personajes", PersonajesApiRouter)

app.listen(2025, () => {
    console.log("Funcionando")
})