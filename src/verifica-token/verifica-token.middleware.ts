import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class VerificaTokenMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (req.headers.authorization == process.env.KEY_TOKEN) {
      next()
    }
    else {
      throw new HttpException("Token Inválido", HttpStatus.NOT_ACCEPTABLE)
    }
  }
}
