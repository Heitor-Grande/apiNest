import { Injectable } from "@nestjs/common";
import { database } from "src/database/connectionDB";
import { Request, Response } from "express"
@Injectable()
export class DeleteService {
    async DeletarUsuario(req: Request, res: Response) {
        try {
            const { email } = req.params
            const ConsultarUsuario = `
            select count(email) as nusuario from public.usuario where email= '${email}'
            `
            const usuarioConsultado = await database.query(ConsultarUsuario)
            if (usuarioConsultado.rows[0].nusuario == 1) {
                const SqlDeleteUsuario = `
                DELETE FROM public.usuario where email= '${email}'
                `
                await database.query(SqlDeleteUsuario)
                return res.status(200).send({
                    message: "Sucesso ao deletar usuario"
                })
            }
            else {
                return res.status(400).send({
                    message: "E-mail não encontrado."
                })
            }
        } catch (error) {
            return res.status(500).send({
                message: "Erro ao deletar usuario: " + error.message
            })
        }
    }
}
