import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { userDto } from "./user.dto";
@Injectable()
export class userService {

    //minha lista armazenada em memoria
    private users: userDto[] = []

    //crio a função do service para realizar a regra de negocio de fato
    create(user: userDto): string {
        try {
            this.users.push(user)
            return "Usuario criado com sucesso"
        } catch (error) {
            throw new HttpException(error.response || "Erro Inesperado", error.status || HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    //carrega usuario por id
    select(id: string): userDto {
        try {
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
        } catch (error) {
            //error.response => minha mensagem
            //error.status => codigo https
            throw new HttpException(error.response || "Erro Inesperado", error.status || HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    //atualizar usuario
    update(id: string, user: userDto): string {
        try {
            //encontrando index do meu usuario na lista
            const indexUser = this.users.findIndex(function (user_) {
                return user_.id_usuario == id
            })
            //atualizando usuario
            if (indexUser >= 0) {
                this.users[indexUser] = user
                return "Usuário Atualizado com sucesso."
            }
            else {
                throw new HttpException("Usuário não encontrado!", HttpStatus.NOT_FOUND)
            }
        } catch (error) {
            throw new HttpException(error.response || "Erro Inesperado", error.status || HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    //remove usuario da lista
    delete(id: string) {
        try {
            const novaLista = this.users.filter(function (user) {
                return user.id_usuario != id
            })
            this.users = novaLista
            return "Usuario removido da lista com sucesso."
        } catch (error) {
            throw new HttpException(error.response || "Erro Inesperado", error.status || HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}