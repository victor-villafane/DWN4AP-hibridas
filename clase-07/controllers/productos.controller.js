import { createPage } from "../pages/utils.js"
import * as services from "../services/productos.service.js"
import * as views from "../views/productos.view.js"

export function getProductos(req, res){
    services.getProductos()
        .then( (productos) => res.send( views.crearListadoProductos(productos) ) )
} 

export function getProductosById(req, res){
    const id = req.params.id
    services.getProductosById(id)
        .then( producto => res.send( views.crearDetalleProducto(producto) ) )
}

export function formularioNuevoProducto(req, res){
    res.send( views.formularioNuevoProducto() )
}

export function guardarProducto(req, res){
    const producto = {
        marca: req.body.marca,
        modelo: req.body.modelo,
        precio: req.body.precio
    }
    services.guardarProducto(producto)
        .then( () => res.send(createPage("Producto Creado", `<p>Modelo: ${producto.modelo} - Marca: ${producto.marca} Precio: ${producto.precio}</p>`)) )
}

export function formularioModificarProducto(req, res){
    const id = req.params.id
    services.getProductosById(id)
        .then( producto => res.send( views.formularioModificarProducto(producto) ) )
}