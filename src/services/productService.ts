import { Request } from "express"
import User from "../models/User"
import Product from "../models/Product"

class ProductService {
    credential: {id: Number}
    body: Request['body']
    params: Request['params']

    constructor(req: Request) {
        this.credential = req.app.locals.user
        this.body = req.body
        this.params = req.params
    }

    getAll = async () => {
        const data = await Product.findAll({
            attributes:[ 'id', 'name', 'price' ],
            where: {
                userId: this.credential.id // req from data middleware
            },
            include:[{ 
                model: User,
                attributes:['email', 'name']
            }] // ada relasi Product ke User
        })

        return data
    }

    store = async () => {
        const { name, price } = this.body
        
        return Product.create({
            name,
            price,
            userId: this.credential.id
        });
    }

    update = async () => {
        // const product = await Product.findOne({
        //     where: { id: this.params }
        // })

        // if (!product) return res.status(404).json({
        //     code : 404,
        //     message: "Product not found" 
        // })
        const { id } = this.params
        const { name, price } = this.body

        return await Product.update(
            { name, price },
            {
                where: { id, userId: this.credential.id }
            }
        )
    }

    delete = async () => {
        const { id }  = this.params
    
        return await Product.destroy(
            {
                where: { id, userId: this.credential.id }
            }
        )
    }
}

export default ProductService