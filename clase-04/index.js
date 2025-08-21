import express from "express"

const app = express()

app.use("/",express.static("public"))
app.use(express.json())                         // para poder recibir datos en formato json
app.use(express.urlencoded({ extended: true })) // para poder recibir datos en formato urlencoded
let contador = 0 // esto se guarda en memoria ram

app.get("/saludo", (req, res) => {
    const nombre = req.query.nombre
    res.send(`<h1>Hola, bienvenido a mi servidor Express ${nombre}</h1>`)
} )

app.post("/saludo", (req, res) => {
    const nombre = req.body.nombre
    res.send(`<h1>Hola, bienvenido a mi servidor Express ${nombre}</h1>`)
})

app.get("/contador", (req, res) =>{
    contador++
    res.send(`<h1>El contador ha sido incrementado a: ${contador}</h1>`)
} )

app.listen(2025, () => {
    console.log("Servidor escuchando en el puerto 2025")
})