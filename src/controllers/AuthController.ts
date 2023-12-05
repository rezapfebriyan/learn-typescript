import { Request, Response } from "express"
import User from "../models/User"
import bcrypt from "bcrypt"
import { comparePassword, generateJwt } from "../utils"

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

export const login = async (req: Request, res: Response): Promise<Response> => {

    const user = await User.findOne({
        where: { email: req.body.email }
    })

    if (!user) return res.status(404).json({
        code : 404,
        message: "User not found"
    })

    const match = await comparePassword(req.body.password, user.password)

    if (!match) return res.status(404).json({
        code : 404,
        message: "Your credentials doestn't match with our record" 
    })

    const name = user.name
    const role = user.role
    const accessToken = generateJwt ({
        id: user.id,
        email: user.email
    })

    return res.status(200).json({
        code : 200,
        message : "Login successful",
        data : { 
            user: { name, role },
            accessToken
        }
    })
}

export const userAuth = async (req: Request, res: Response) => {
    return res.json({ result: req.app.locals.user })
}