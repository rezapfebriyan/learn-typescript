import { Request, Response, NextFunction } from "express"
import { check, validationResult } from "express-validator"

export const validate = [
    check('name').isString().isLength({ min: 5, max: 20 }),
    check('price').isInt(),
    (req: Request, res: Response, next: NextFunction): any => {
        const err = validationResult(req)
        if (!err.isEmpty()) return res.status(400).json({ message: err.array() })

        return next()
    }
]