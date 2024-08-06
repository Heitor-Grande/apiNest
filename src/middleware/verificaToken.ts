import { Injectable, NestMiddleware } from '@nestjs/common';
import { configDotenv } from 'dotenv';
import { Request, Response, NextFunction } from 'express';
configDotenv()

@Injectable()
export class VerificaToken implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        if (req.headers.authorization === process.env.KEY_TOKEN) {
            next()
        }
        else {
            return res.status(403).send({
                message: "Requisição não autorizada"
            })
        }
    }
}
