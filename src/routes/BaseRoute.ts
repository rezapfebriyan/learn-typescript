import { Router } from "express"
import IRoute from "./IRoute"

abstract class BaseRoutes implements IRoute {
    public router: Router

    constructor() {
        this.router = Router()
        this.routes()
    }

    abstract routes(): void
}

export default BaseRoutes