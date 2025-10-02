import express from "express"
import ProductosRouter from "./routes/productos.route.js"
import ProductoApiRouter from "./api/routes/productos.api.routes.js"
import PersonajesRouter from "./routes/personajes.route.js"
import PersonajesApiRouter from "./api/routes/personajes.api.routes.js"
import swaggerUI from 'swagger-ui-express'
import swaggerJSON from './swagger.output.json' with { type: 'json' }

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use( "/index", express.static("public") )
app.use( '/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON) )

app.use("/productos", ProductosRouter)
app.use("/api/productos", ProductoApiRouter)
app.use("/personajes", PersonajesRouter)
app.use("/api/personajes", PersonajesApiRouter)
//https://vercel.com/docs/frameworks/backend/express
app.listen(2025, () => {
    console.log("Funcionando")
})
