import { Injectable } from "@nestjs/common"
import { userDto } from "./user.dto";
@Injectable()
export class userService {
    private users: userDto[] = []
    //crio a função do service para realizar a regra de negocio de fato
    create(user: userDto) {
        this.users.push(user)
        console.log(this.users)
    }
}