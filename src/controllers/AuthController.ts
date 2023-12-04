import { Request, Response } from "express"
import User from "../models/User"
import bcrypt from "bcrypt"

export const register = async (req: Request, res: Response): Promise<Response> => {
    const { name, email, password, role } = req.body
    const hash: string = await bcrypt.hash(password, 10)
    
    try {
        await User.create({
            name,
            email,
            password: hash,
            role
        });
        
        return res.status(201)
            .json({
                code : 201,
                message: "Registration successful"
            })

    } catch (error: any) {
        return res.status(500)
            .json({
                code: 500,
                message: error.message
            });
    }
}