import { readFile, writeFile } from "node:fs/promises";

export function getProductos(filter = {}) {
  return readFile("./data/productos.json", "utf-8")
    .then((data) => {
      return JSON.parse(data);
    })
    .then( productos => {
      if(filter.eliminados){
        return productos
      }
      const productosFiltrados = productos.filter( p => p.eliminado != true )
      return productosFiltrados
    } )
    .catch((err) => {
      console.error("No se cargaron los productos"); //logs
      return [];
    });
}

export function getProductosById(id) {
  return getProductos().then((productos) => {
    const producto = productos.find((p) => p.id == id);
    return producto;
  });
}

export function guardarProducto(producto) {
  return getProductos().then((productos) => {
    const nuevoProducto = {
        ...producto,
        id: productos.length + 1
    }
    productos.push(nuevoProducto)
    return writeFile("./data/productos.json", JSON.stringify(productos))
  })
  .catch( () => nuevoProducto )
}

export function editarProducto(id, producto){
  return getProductos().then( async (productos) => {
    const nuevoProducto = {
        id: id,
        ...producto,
    }
    const nuevoListado = productos.filter( p => p.id != id )
    nuevoListado.push(nuevoProducto)
    await writeFile("./data/productos.json", JSON.stringify(nuevoListado))
    return nuevoProducto
  })
  .catch( () => nuevoProducto )
}

export function EliminarProducto(id){
  return getProductos().then( async (productos) => {

    const nuevoListado = productos.map( p => {
        if(p.id == id){
          p.eliminado = true
        }
        return p
    } )

    await writeFile("./data/productos.json", JSON.stringify(nuevoListado))
    return id
  })
  .catch( () => id )
}
