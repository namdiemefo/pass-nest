import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import config from "src/config/config";
import { verify } from 'jsonwebtoken';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
    use(req, res, next: NextFunction) {

        let token = req.headers.authorization?.split(' ')[1];

        if (token) {
            verify(token, config.secret, (error, decoded) => {
                if (error) {
                    return res.status(404).json({
                        status: error.name,
                        code: 404,
                        message: error.message,
                    });
                } else {
                    res.locals.jwt = decoded;
                    next();
                }
            });
        } else {
            return res.status(401).json({
                status: 'Unauthorized',
                code: 401,
                message: 'You are unauthorized to perform this action'
            });
        }

    }
  }