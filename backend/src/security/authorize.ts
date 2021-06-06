import { RequestHandler } from 'express-serve-static-core';
import { UserRole } from '../entities/users';

export function auth(role: UserRole): RequestHandler {
    return (req, res, next) => {
        if (req.user?.role === role) {
            return next();
        }
        return res.sendStatus(403);
    }
}