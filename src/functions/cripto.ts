import { AES, enc } from "crypto-js";
import { configDotenv } from "dotenv";
configDotenv()

export function Criptografar(info: string): string {
    return AES.encrypt(info, process.env.KEY_CRYPTOJS).toString()
}

export function Descriptografar(info: string): string {
    return AES.decrypt(info, process.env.KEY_CRYPTOJS).toString(enc.Utf8)
}