import bcrypt from "bcrypt"
import { config as dotenv } from "dotenv"
import jwt from "jsonwebtoken"

dotenv()

const secret: string = process.env.APP_SECRET || "$2b%dEfaULt190@Ipt"

export const comparePassword = async (password: string, hashPassword: string): Promise<boolean> => {
    return await bcrypt.compare(password, hashPassword)
}

export const generateJwt = (payload: object): string => jwt.sign(payload, secret, {
    expiresIn: '1h'
  })