import { Injectable } from "@nestjs/common";
import { Request, Response } from "express";
import { database } from "src/database/connectionDB";
import { Descriptografar } from "src/functions/cripto";
Injectable()
export class SelectService {
    async CarregarUsuarioUnico(req: Request, res: Response) {
        try {
            const { email } = req.params
            const SQLSelectUsuario = `
            SELECT
            *
            FROM 
            public.usuario
            WHERE
            email = '${email}'
            `
            const usuario = await database.query(SQLSelectUsuario)
            if (usuario.rows.length == 1) {
                const usuarioCarregado: usuario = usuario.rows[0]
                return res.status(200).send({
                    message: "Sucesso ao buscar usuario.",
                    usuario: {
                        id_usuario: usuarioCarregado.id_usuario,
                        nome: usuarioCarregado.nome,
                        senha: Descriptografar(usuarioCarregado.senha),
                        email: usuarioCarregado.email
                    }
                })
            }
            else {
                return res.status(400).send({
                    message: "Nenhum usuario encontrado."
                })
            }
        } catch (error) {
            return res.status(500).send({
                message: "Erro ao carregar usuario: " + error.message
            })
        }
    }
    async carregarTodosUsuarios(req: Request, res: Response) {
        try {
            const SQLCarregarTodos = `
            SELECT 
            nome, id_usuario, email
            FROM
            public.usuario
            `
            const usuarios = await database.query(SQLCarregarTodos)
            return res.status(200).send({
                message: "Sucesso ao carregar todos os usuarios.",
                usuarios: usuarios.rows
            })
        } catch (error) {
            return res.status(500).send({
                message: "Erro ao carregar todos os usuarios."
            })
        }
    }
}