import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { database } from "src/database/connectionDB";
import { Criptografar } from "src/functions/cripto";
@Injectable()
export class InsertService {
    async criarUsuario(usuario: usuario): Promise<criacaoUsuario> {
        try {
            usuario.senha = Criptografar(usuario.senha)
            const InsertUsuario = `
                INSERT INTO public.usuario
                (nome, senha, email)
                VALUES('${usuario.nome}', '${usuario.senha}', '${usuario.email}')
                RETURNING *
            `
            const usuarioCriado = await database.query(InsertUsuario)
            return {
                message: "Sucesso ao criar novo usuario.",
                usuario: {
                    nome: usuarioCriado.rows[0].nome,
                    email: usuarioCriado.rows[0].email,
                    id_usuario: usuarioCriado.rows[0].id_usuario
                }
            }
        } catch (error) {
            throw new HttpException("Erro ao criar usuario: " + error.message || error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}