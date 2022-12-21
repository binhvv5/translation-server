import jwt from "jsonwebtoken";
import config from "config";
import {createResponseData} from "../model/response.model";
import {NextFunction, Request, Response} from "express";

const privateKey = config.get("privateKey") as string;
const key = "c88d74ba-1554-48a4-b549-b926f5d77c9e";
export function sign(object: Object, options?: jwt.SignOptions | undefined) {
    return jwt.sign(object, privateKey, options);
}

export function decode(token: string) {
    try {
        const decoded = jwt.verify(token, privateKey);

        return {valid: true, expired: false, decoded};
    } catch (error) {
        return {
            valid: false,
            expired: error.message === "jwt expired",
            decoded: null,
        };
    }
}

// @ts-ignore
export const authenticateToken = (req: Request,
                                  res: Response,
                                  next: NextFunction) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, key, (err: any, user: any) => {
        console.log(err)
        if (err) return res.sendStatus(403);

        next()
    })
}
