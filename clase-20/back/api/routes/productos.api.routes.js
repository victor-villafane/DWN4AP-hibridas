import { Router } from "express";
import * as controllers from "../controllers/controller.api.productos.js"
import { validateProducto } from "../../middleware/producto.validate.middleware.js"
const route = Router()
//query string mongodb+srv://admin:admin@dwn4ap.syxmi5s.mongodb.net/
route.get("/", controllers.getProductos)
route.get("/:id", controllers.getProductoById)
route.post("/",[validateProducto], controllers.nuevoProducto)
route.delete("/:id", controllers.eliminarProducto)
route.patch("/:id",controllers.editarProducto)                             //  edita solo lo necesario
route.put("/:id", controllers.reemplazarProducto)                           //  Reemplaza

export default route