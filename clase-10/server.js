import express from "express"
import ProductosRouter from "./routes/productos.route.js"
import ProductoApiRouter from "./api/routes/productos.api.routes.js"
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use( "/index", express.static("public") )

app.use("/productos", ProductosRouter)
app.use("/api/productos", ProductoApiRouter)

app.listen(2025, () => {
    console.log("Funcionando")
})