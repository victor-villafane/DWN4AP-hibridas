import { readFile, writeFile } from "node:fs/promises";

export function getProductos() {
  return readFile("./data/productos.json", "utf-8")
    .then((data) => {
      return JSON.parse(data);
    })
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
