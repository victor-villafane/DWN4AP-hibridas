import { call } from "./api.service"

export function getProductos(){
    return call({ uri: "productos" })
}

export function getProductosById(id){
    return call( {uri: `productos/${id}`})
}