import jwt from 'jsonwebtoken';
import { User } from 'src/models/user.model';
import config from 'src/config/config';
import logging from 'src/config/logging';
import { NextFunction } from 'express';

const NAMESPACE = 'AUTH';

export const signJWT = (user: User, callback: (error: Error | null, token: string | null) => void): void => {
    const timeSinchEpoch = new Date().getTime();
    const expirationTime = timeSinchEpoch + 240 * 100000;
    const expirationTimeInSeconds = Math.floor(expirationTime / 1000);

    console.log(`Attempting to sign token for ${user.first_name}`);

    try {
        jwt.sign(
            {
                email: user.email,
                id: user.id
            },
            config.secret,
            {
                issuer: config.issuer,
                algorithm: 'HS256',
                expiresIn: expirationTimeInSeconds
            },
            (error, token) => {
                if (error) {
                    callback(error, null);
                } else if (token) {
                    callback(null, token);
                }
            }
        );
    } catch (error: any) {
        logging.error(NAMESPACE, `${error.message}`, error);
        callback(error.message, null);
    }
};

export const extractJWT = (req, res, next: NextFunction) => {
    logging.info(NAMESPACE, 'Validating Token');

    let token = req.headers.authorization?.split(' ')[1];

    if (token) {
        jwt.verify(token, config.secret, (error, decoded) => {
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

export default signJWT;