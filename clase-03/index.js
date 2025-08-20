// const http = require("http")
// const productos = require("./data/productos.js")
// const pages = require("./pages/utils.js")

import { createServer } from "http"
// import { productos } from "./data/productos.js"
import productos from "./data/productos.js"
import { createPage, createProductList } from "./pages/utils.js"
import { readFile, readFileSync } from "fs"

const server = createServer(function (req, res) {
    console.log(req.url)
    switch (req.url) {
        case "/":
            /*readFile( "../data.txt","utf-8", (err, data) => {
                if( err ) throw err
                res.write(data)
                // res.end()
            } )*/
            res.write(createPage("Home", "nombre y apellido"))
            res.end()
            break
        case "/materia":
            res.write(createPage("Materia", "Aplicaciones hibridas"))
            res.end()
            break
        case "/profesor":
            res.write(createPage("Profesor", "Nombre profesor"))
            res.end()
            break
        case "/productos":
            res.write(createPage("Productos", createProductList(productos)))
            res.end()
            break
        case "/hola.html":
            readFile("./public/hola.html", "utf-8", (err, data) => {
                if (err) throw err
                res.write(data)
                res.end()
            })
            break
        case "/style.css":
            readFile("./public/style.css", "utf-8", (err, data) => {
                if (err) throw err
                res.write(data)
                res.end()
            })
            break
        default:
            res.write(createPage("404", "Pagina no encontrada"))
            res.end()
            break
    }
})

server.listen(2025, () => {
    console.log("Funcionando....")
})