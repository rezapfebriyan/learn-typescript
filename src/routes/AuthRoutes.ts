import { login, register, userAuth } from "../controllers/AuthController"
import { validateLogin, validateRegist } from "../middlewares/AuthValidator"
import { auth } from "../middlewares/auth"
import BaseRoutes from "./BaseRoute"

class AuthRoutes extends BaseRoutes  {

    public routes(): void {
        this.router.post("/register", validateRegist, register)
        this.router.post("/login", validateLogin, login)
        this.router.get("/userAuth", auth, userAuth)
    }
}

export default new AuthRoutes().router