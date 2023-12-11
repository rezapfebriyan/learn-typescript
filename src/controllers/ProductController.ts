import { Request, Response } from "express"
import IController from "./IController"
import ProductService from "../services/productService"

class ProductController implements IController {
    getAll = async (req: Request, res: Response): Promise<Response> => {
        try {
            const service: ProductService = new ProductService(req)
            const data = await service.getAll()
            
            return res.status(200)
            .json({ code : 200, data })
    
        } catch (error: any) {
            return res.status(500)
                .json({ code : 500,
                message: error.message })
        }
    }
    store = async (req: Request, res: Response): Promise<Response> => {
        try {
            const service: ProductService = new ProductService(req)
            await service.store()
            
            return res.status(201)
                .json({
                    code : 201,
                    message: "Product has been stored"
                })
    
        } catch (error: any) {
            return res.status(500)
                .json({
                    code: 500,
                    message: error.message
                });
        }
    }
    update = async (req: Request, res: Response): Promise<Response> => {
        try {
            const service: ProductService = new ProductService(req)
            const data = await service.update()
    
            return res.status(200).json({ 
                code : 200,
                message: "Product has been updated"
            })
        } catch (error: any) {
            return res.status(500)
                .json({
                    code: 500,
                    message: error.message
                });
        }
    }
    delete = async (req: Request, res: Response): Promise<Response> => {
        try {
            const service: ProductService = new ProductService(req)
            await service.delete()
    
            return res.status(200).json({ 
                code : 200,
                message: "Product has been deleted"
            })
        } catch (error: any) {
            return res.status(500)
                .json({
                    code: 500,
                    message: error.message
                });
        }
    }
}

export default new ProductController()