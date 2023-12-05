import { Request, Response, NextFunction } from "express"
import { verifyJwt } from "../utils"

export const auth = (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) return res.status(401).json({ code: 401, message: "Unauthorized" })

    const token = req.headers.authorization.split(' ')[1]

    try {
        const credential: string | object = verifyJwt(token)
        if (!credential) return res.status(401).json({ code: 401, message: "Unauthorized" })

        req.app.locals.user = credential

        return next()
    } catch (error) {
        return res.status(500).json({ code: 500, message: error })
    }

}