import { Router } from "express";
import * as controllers from "../controllers/controller.api.productos.js"
const route = Router()

route.get("/", controllers.getProductos)
route.get("/:id", controllers.getProductoById)

export default route