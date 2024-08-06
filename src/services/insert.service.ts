import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { database } from "src/database/connectionDB";
import { Criptografar } from "src/functions/cripto";
import { Response, Request } from "express";
@Injectable()
export class InsertService {
    async criarUsuario(req: Request, res: Response) {
        try {
            const usuario: usuario = req.body
            usuario.senha = Criptografar(usuario.senha)
            const InsertUsuario = `
                INSERT INTO public.usuario
                (nome, senha, email)
                VALUES('${usuario.nome}', '${usuario.senha}', '${usuario.email}')
                RETURNING *
            `
            const usuarioCriado = await database.query(InsertUsuario)
            return res.status(200).send({
                message: "Sucesso ao criar usuario.",
                usuarioCriado: {
                    nome: usuarioCriado.rows[0].nome,
                    email: usuarioCriado.rows[0].email,
                    id_usuario: usuarioCriado.rows[0].id_usuario
                }
            })
        } catch (error) {
            return res.status(500).send({
                message: "Erro ao criar usuario: " + error.message || error
            })
        }
    }
}