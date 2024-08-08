import { Injectable } from "@nestjs/common";
import { Request, Response } from "express";
import { database } from "src/database/connectionDB";
import { Criptografar } from "src/functions/cripto";

@Injectable()
export class UpdateService {
    async updateUsuario(req: Request, res: Response) {
        try {
            const usuario: usuario = req.body
            const { id_usuario } = req.params
            const SQLConsultarUsuario = `
            SELECT 
            count(email) as nusuario 
            FROM public.usuario
            WHERE 
            id_usuario = ${id_usuario};
            `
            const usuarioEncontrado = await database.query(SQLConsultarUsuario)
            if (usuarioEncontrado.rows[0].nusuario == 1) {
                const SQLUpdateUsuario = `
                UPDATE public.usuario
                SET nome='${usuario.nome}', 
                senha='${Criptografar(usuario.senha)}',
                email='${usuario.email}'
                WHERE id_usuario = ${id_usuario};
                `
                await database.query(SQLUpdateUsuario)
                return res.status(200).send({
                    message: "Usuario atualizado com sucesso."
                })
            }
            else {
                return res.status(400).send({
                    message: "Usuario não encontrado para fazer o UPDATE."
                })
            }
        } catch (error) {
            return res.status(500).send({
                message: "Erro ao atualizar usuario: " + error.message || error
            })
        }
    }
}