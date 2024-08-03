import { Controller, Post, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { InsertService } from "src/services/insert.service";
@Controller()
export class InsertController {
    constructor(private readonly insertService: InsertService) {

    }
    @Post("/criar/novo/user")
    @HttpCode(HttpStatus.CREATED)
    criarUsuario(@Body() usuario: usuario) {
        return this.insertService.criarUsuario(usuario)
    }
}