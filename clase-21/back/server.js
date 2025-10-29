import express from "express"
import ProductosRouter from "./routes/productos.route.js"
import ProductoApiRouter from "./api/routes/productos.api.routes.js"
import PersonajesRouter from "./routes/personajes.route.js"
import PersonajesApiRouter from "./api/routes/personajes.api.routes.js"
import UsuariosApiRouter from './api/routes/usuarios.routes.js'
import swaggerUI from 'swagger-ui-express'
import swaggerJSON from './swagger.output.json' with { type: 'json' }
import cors from 'cors'

const app = express()

const corsOptions = {   //NO ES EL MISMO QUE VAN A TENER EN SOCKETS!
    origin: ["http://localhost:5173"],
    methods: "GET, POST, PUT, PATCH, DELETE"
}

app.use(cors(corsOptions)) //IMPORTANTE!!! Y REINICIAR

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use( "/index", express.static("public") )
app.use( '/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON) )

app.use("/productos", ProductosRouter)
app.use("/api/productos", ProductoApiRouter)
app.use("/personajes", PersonajesRouter)
app.use("/api/personajes", PersonajesApiRouter)
app.use("/api/usuarios", UsuariosApiRouter)
//https://vercel.com/docs/frameworks/backend/express
app.listen(2025, () => {
    console.log("Funcionando en el puerto 2025")
})
