import express from "express"

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use( "/index", express.static("public") )

app.get("/", (req, res) => {
    console.log(req.query)
    const nombre = req.query.nombre
    res.send("Hola! " + nombre)
})

app.get("/:elnombre", (req, res) => {
    console.log("valor: ",req.params)
})


app.post("/", (req, res) => {
    const nombre = req.body.nombre
    res.send("Hola! " + nombre)
    // console.log(req.body)
})

app.get("/hola", (req, res) => {
    res.send("Hola!")
})

app.listen(2025, () => {
    console.log("Funcionando")
})