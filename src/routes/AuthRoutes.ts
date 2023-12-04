import { register } from "../controllers/AuthController"
import { validateRegist } from "../middlewares/AuthValidator"
import BaseRoutes from "./BaseRoute"

class AuthRoutes extends BaseRoutes  {

    public routes(): void {
        this.router.post("/register", validateRegist, register)
    }
}

export default new AuthRoutes().router