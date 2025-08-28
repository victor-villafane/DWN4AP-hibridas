import express from "express"
import { readFile } from "node:fs/promises"
import { createPage } from "./pages/utils.js"

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use( "/index", express.static("public") )

app.get( "/productos", (req, res) => {
    readFile("./data/productos.json", "utf-8")
        .then( (data) => {
            return JSON.parse(data)
        } )
        .catch( (err) => {
            console.error("No se cargaron los productos")
            return []
        } )
        .then( (productos) => {
            let html = "<h1>Productos</h1>"
            html += "<ul>"
            productos.forEach( producto => {
                html += `<li> ${producto.modelo} <a href="/productos/${producto.id}" >Ver</a> </li>`
            });
            html += "</ul>"

            res.send( createPage("Productos", html) )
        } )
} )

app.get( "/productos/:id", (req, res) => {
    const id = req.params.id
    readFile("./data/productos.json", "utf-8")
        .then( (data) => {
            return JSON.parse(data)
        } )
        .catch( (err) => {
            console.error("No se cargaron los productos")
            return []
        } )
        .then( (productos) => {
            let html = ""
            const producto = productos.find( (producto) => producto.id == id )

            if( producto ){
                html += `<h1>Modelo: ${producto.modelo}</h1>`
                html += `<p>Precio: ${producto.precio}</p>`
                html += `<p>Marca: ${producto.marca}</p>`
                html += `<a href="/productos">Volver</a>`
                res.send( createPage(producto.modelo, html) )
            }else{
                res.send( createPage("Error", "<p>Producto no encontrado</p>") )
            }
        } )
} )

app.listen(2025, () => {
    console.log("Funcionando")
})