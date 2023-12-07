import { Request, Response } from "express"
import User from "../models/User"

import IController from "./IController"
import Product from "../models/Product"

class ProductController implements IController {
    getAll = async (req: Request, res: Response): Promise<Response> => {
        const { id }  = req.app.locals.user
        try {
            const data = await Product.findAll({
                attributes:[ 'id', 'name', 'price' ],
                where: {
                    userId: id // req from data middleware
                },
                include:[{ 
                    model: User,
                    attributes:['email', 'name']
                }] // ada relasi Product ke User
            })
            return res.status(200)
            .json({ code : 200, data })

    
        } catch (error: any) {
            return res.status(500)
                .json({ code : 500,
                message: error.message })
        }
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
    }
    update = async (req: Request, res: Response): Promise<Response> => {
        try {
            const product = await Product.findOne({
                where: { id: req.params.id }
            })
    
            if (!product) return res.status(404).json({
                code : 404,
                message: "Product not found" 
            })
    
            const { id: userId }  = req.app.locals.user
            const { name, price } = req.body
    
            const data = await Product.update(
                { name, price },
                {
                    where: { id:  product.id, userId }
                }
            )
    
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
    delete(req: Request, res: Response): Response {
        return res.status(200).json({result: req.body.data})
    }
}

export default new ProductController()