import express from "express"
import ProductosRouter from "./routes/productos.route.js"
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use( "/index", express.static("public") )

app.use("/productos", ProductosRouter)


app.listen(2025, () => {
    console.log("Funcionando")
})