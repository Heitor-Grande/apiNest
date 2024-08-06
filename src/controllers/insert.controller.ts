import { Controller, Post, HttpCode, HttpStatus, Req, Res } from "@nestjs/common";
import { InsertService } from "src/services/insert.service";
import { Request, Response } from "express";
@Controller()
export class InsertController {
    constructor(private readonly insertService: InsertService) {

    }
    @Post("/criar/novo/user")
    @HttpCode(HttpStatus.CREATED)
    criarUsuario(@Req() req: Request, @Res() res: Response) {
        return this.insertService.criarUsuario(req, res)
    }
}