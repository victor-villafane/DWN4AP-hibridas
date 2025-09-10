import { Router } from "express";
import * as controllers from "../controllers/controller.api.productos.js"

const route = Router()

route.get("/", controllers.getProductos)
route.get("/:id", controllers.getProductoById)
route.post("/", controllers.nuevoProducto)
route.delete("/:id", controllers.eliminarProducto)
route.patch("/:id", controllers.editarProducto)                             //  edita solo lo necesario
route.put("/:id", controllers.reemplazarProducto)                           //  Reemplaza

export default route