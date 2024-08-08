import { Controller, Get, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { SelectService } from "src/services/select.service";

@Controller()
export class SelectController {
    constructor(private readonly selectService: SelectService) {

    }
    @Get("/buscar/usuario/:email")
    CarregarUsuarioUnico(@Req() req: Request, @Res() res: Response) {
        return this.selectService.CarregarUsuarioUnico(req, res)
    }
    @Get("/buscar/todos")
    CarregarTodosUsuario(@Req() req: Request, @Res() res: Response) {
        return this.selectService.carregarTodosUsuarios(req, res)
    }
}