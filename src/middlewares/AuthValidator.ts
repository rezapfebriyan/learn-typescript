import { Request, Response, NextFunction } from "express"
import { check, validationResult } from "express-validator"

export const validateRegist = [
    check('name').isString().isLength({ min: 5, max: 20 }),
    check('email', 'invalid email').isEmail(),
    check('password', 'The minimum password length is 8 characters').isLength({ min: 8 }),
    check('role', 'invalid value selected').isIn(['admin', 'consumer']).isString(),
    (req: Request, res: Response, next: NextFunction): any => {
        const err = validationResult(req)
        if (!err.isEmpty()) return res.status(400).json({ message: err.array() })

        return next()
    }
]

export const validateLogin = [
    check('email', 'invalid email').isEmail(),
    check('password', 'The minimum password length is 8 characters').isLength({ min: 8 }),
    (req: Request, res: Response, next: NextFunction): any => {
        const err = validationResult(req)
        if (!err.isEmpty()) return res.status(400).json({ message: err.array() })

        return next()
    }
]