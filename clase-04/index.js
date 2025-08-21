import { createServer } from "http"

import productos from "./data/productos.js"
import { createPage, createProductList } from "./pages/utils.js"
import { readFile } from "fs"

const server = createServer(function (req, res) {
    console.log(req.url)
    switch (req.url) {
        case "/":
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
            readFile("./public/hola.html", "utf-8", function (err, data) {
                if (err) res.end("500 error interno del servidor")
                res.write(data)
                res.end()
            })
            break
        case "/style.css":
            readFile("./public/style.css", "utf-8", function (err, data) {
                if (err) res.end("500 error interno del servidor")
                res.write(data)
                res.end()
            })
            break
        case "/home.html":
            readFile("./public/home.html", "utf-8", function (err, data) {
                if (err) res.end("500 error interno del servidor")
                res.write(data)
                res.end()
            })
            break
        case "/img/1.png":
            readFile("./public/img/1.png", function (err, data) {
                if (err) res.end("500 error interno del servidor")
                res.write(data)
                res.end()
            })
            break
        case "/contacto.html":
            readFile("./public/contacto.html", "utf-8", function (err, data) {
                if (err) res.end("500 error interno del servidor")
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