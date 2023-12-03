import express, { Application } from "express"
import compression from "compression"
import { config as dotenv } from "dotenv"
import AuthRoutes from "./routes/AuthRoutes"

class App {
    public app: Application
    
    constructor() {
        this.app = express()
        this.library()
        this.routes()
        dotenv()
    }
    
    protected library(): void {
        this.app.use(express.json())
        this.app.use(compression())
    }

    protected routes(): void {
        this.app.use("/api/v1/auth", AuthRoutes)
    }
}

const app = new App().app
const port = process.env.APP_PORT

app.listen(port, () => {
    console.log(`Server up and running on port ${port}...`);
})