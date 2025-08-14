const http = require("http")

const productos = [
    { id: 1, nombre: "Cafe expreso", precio: 200 },
    { id: 2, nombre: "Cafe Americano", precio: 200 },
    { id: 3, nombre: "Cafe Cortado", precio: 250 },
    { id: 4, nombre: "Cafe Doble", precio: 230 },
    { id: 5, nombre: "Cafe Lagrima", precio: 190 }
]

const server = http.createServer(function (req, res) {

    res.write(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Aplicaciones hibridas</title></head><body>`)

    res.write("<h1>Mi espectacular pagina web</h1>")

    switch (req.url) {
        case "/":
            res.write("nombre y apellido")
            break
        case "/materia":
            res.write("Aplicaciones hibridas")
            break
        case "/profesor":
            res.write("Nombre profesor")
            break
        case "/productos":
            res.write(`<table>
                    <tr>
                        <th>id</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                    `)
            productos.forEach(producto => {
                res.write(`<tr>
                        <td>${producto.id}</td>
                        <td>${producto.nombre}</td>
                        <td>${producto.precio}</td>
                    </tr>`)
            })
            res.write(`</table>`)
            break
        default:
            res.write("404")
            break
    }
    res.write("</body>")
    res.write("</html>")
    res.end()
})

server.listen(2025)