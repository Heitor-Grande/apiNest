import { Client } from "pg";
import { configDotenv } from "dotenv";
configDotenv()
export const database = new Client({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: parseInt(process.env.PORT_DB),
    database: process.env.DATABASE,
})
database.connect().then(function () {
    console.log("Conectado ao banco com sucesso.")
}).catch(function (erro) {
    console.log(erro)
})
