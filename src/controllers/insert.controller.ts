import { Controller, Post, Req, Res } from "@nestjs/common";
import { InsertService } from "src/services/insert.service";
import { Request, Response } from "express";
@Controller()
export class InsertController {
    constructor(private readonly insertService: InsertService) {

    }
    @Post("/criar/novo/user")
    criarUsuario(@Req() req: Request, @Res() res: Response) {
        return this.insertService.criarUsuario(req, res)
    }
}