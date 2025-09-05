import type { NextFunction, Request, Response } from "express";

export function authMiddleware(req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers['authorization'];
    // for now untill the auth its gonna be hardcoded
    req.userId = "1";
    next();
}