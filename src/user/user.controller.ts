import { Body, Controller, Param, Post, Get, Put } from "@nestjs/common"
import { userDto } from "./user.dto";
import { userService } from "./user.service";
//Controller => rota de acesso "/user"
@Controller("user")
export class userController {
    //cria um constructor do tipo userService para acessar os metodos do meu service
    constructor(private readonly userService: userService) { }
    @Post("/criar/novo")
    //metodo que vai receber o user e chamar o metodo do service para aplicar regra de negocio
    createUser(@Body() user: userDto): string {
        return this.userService.create(user)
    }

    //rota para pegar usuario por id, na minha lista de usuarios
    @Get("/:idUser")
    buscarUserById(@Param("idUser") idUser: string): userDto {
        return this.userService.select(idUser)
    }

    //atualiza usuario
    @Put("/atualizar/usuario/:idUsuario")
    atualizarUser(@Param("idUsuario") idUser: string, @Body() user: userDto) {
        return this.userService.update(idUser, user)
    }
}