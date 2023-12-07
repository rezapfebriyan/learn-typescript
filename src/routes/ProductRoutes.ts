import ProductController from "../controllers/ProductController"
import { validate } from "../middlewares/ProductValidator"
import { auth } from "../middlewares/auth"
import BaseRoutes from "./BaseRoute"

class ProductRoutes extends BaseRoutes  {

    public routes(): void {
        this.router.post("/", auth, validate, ProductController.store)
        this.router.get("/", auth, ProductController.getAll)
        this.router.put("/:id", auth, validate, ProductController.update)
        this.router.delete("/:id", auth, ProductController.delete)
    }
}

export default new ProductRoutes().router