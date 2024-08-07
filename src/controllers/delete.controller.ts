import { Controller, Delete, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { DeleteService } from "src/services/delete.service";
@Controller()
export class DeleteController {
    constructor(private readonly deleteService: DeleteService) {

    }
    @Delete("/deletar/user/:email")
    DeletarUsuario(@Req() req: Request, @Res() res: Response) {
        return this.deleteService.DeletarUsuario(req, res)
    }
}