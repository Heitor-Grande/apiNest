import { Body, Controller, Post } from "@nestjs/common"
import { userDto } from "./user.dto";
import { userService } from "./user.service";
//Controller => rota de acesso "/user"
@Controller("user")
export class userController {
    //cria um constructor do tipo userService para acessar os metodos do meu service
    constructor(private readonly userService: userService) { }
    @Post()
    //metodo que vai receber o user e chamar o metodo do service para aplicar regra de negocio
    createUser(@Body() user: userDto) {
        this.userService.create(user)
    }
}