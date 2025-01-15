import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { userDto } from "./user.dto";
@Injectable()
export class userService {
    //minha lista armazenada em memoria
    private users: userDto[] = []

    //crio a função do service para realizar a regra de negocio de fato
    create(user: userDto): string {
        this.users.push(user)
        console.log(this.users)
        return "Usuario criado com sucesso"
    }

    //carrega usuario por id
    select(id: string): userDto {
        //filtrando usuario por id no meu array de users
        const userEncontrado = this.users.filter(function (user) {
            return user.id_usuario == id
        })
        if (userEncontrado.length) {
            return userEncontrado[0]
        }
        else {
            throw new HttpException("Usuario nao encontrado na lista.", HttpStatus.NOT_FOUND)
        }
    }

    //atualizar usuario
    update(id: string, user: userDto) {
        //encontrando index do meu usuario na lista
        
    }

}