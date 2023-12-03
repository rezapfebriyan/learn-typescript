import { register } from "../controllers/AuthController"
import BaseRoutes from "./BaseRoute"

class AuthRoutes extends BaseRoutes  {

    public routes(): void {
        this.router.post("/register", register)
    }
}

export default new AuthRoutes().router