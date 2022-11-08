import { Request, Response, NextFunction } from "express";

export const = (request: Request,
    response: Response,
    next: NextFunction) => {
    .findById(request.session.userId, (error, user) => {
        if (error || !user) {
            return request.redirect('/');
        }
        next();
    })
}