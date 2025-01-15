import { Body, Controller, Post } from "@nestjs/common"
import { userDto } from "./user.dto";
import { userService } from "./user.service";
//Controller => rota de acesso "/user"
@Controller("user")
export class userController {

    constructor(private readonly userService: userService) { }

    @Post()
    //função para criar novo user
    createUser(@Body() user: userDto) {
        this.userService.create(user)
    }
}