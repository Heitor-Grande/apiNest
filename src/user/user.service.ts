import { Injectable } from "@nestjs/common"
import { userDto } from "./user.dto";
@Injectable()
export class userService {
    private users: userDto[] = []
    create(user: userDto) {
        this.users.push(user)
        console.log(this.users)
    }
}