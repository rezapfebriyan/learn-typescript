import { Request, Response } from "express"
import User from "../models/User"

import IController from "./IController"
import Product from "../models/Product"

class ProductController implements IController {
    getAll(req: Request, res: Response): Response {
        return res.status(200).json({result: req.body.data})
    }
    store = async (req: Request, res: Response): Promise<Response> => {
        const { id }  = req.app.locals.user
        const { name, price } = req.body
        try {
            await Product.create({
                name,
                price,
                userId: id
            });
            
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
        return res.status(200).json({result: req.body.data})
    }
    update(req: Request, res: Response): Response {
        return res.status(200).json({result: req.body.data})
    }
    delete(req: Request, res: Response): Response {
        return res.status(200).json({result: req.body.data})
    }
}

export default new ProductController()