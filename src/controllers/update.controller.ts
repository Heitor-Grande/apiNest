import { Controller, Put, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { UpdateService } from "src/services/update.service";

@Controller()
export class UpdateController {
    constructor(private readonly updateService: UpdateService) {

    }
    @Put("/atualizar/usuario/:id_usuario")
    AtualizarUsuario(@Req() req: Request, @Res() res: Response) {
        return this.updateService.updateUsuario(req, res)
    }
}