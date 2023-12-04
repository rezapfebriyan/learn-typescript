import { login, register } from "../controllers/AuthController"
import { validateLogin, validateRegist } from "../middlewares/AuthValidator"
import BaseRoutes from "./BaseRoute"

class AuthRoutes extends BaseRoutes  {

    public routes(): void {
        this.router.post("/register", validateRegist, register)
        this.router.post("/login", validateLogin, login)
    }
}

export default new AuthRoutes().router