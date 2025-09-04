import * as service from "../../services/productos.service.js"

export function getProductos(req, res){
    service.getProductos()
        .then( productos => productos.length > 0 
                        ? res.status(200).json(productos)
                        : res.status(500).json({})
                    )
}

export function getProductoById(req, res){
    const id = req.params.id
    service.getProductosById(id)
        .then( producto => res.status(200).json(producto) )
}