import { Morador, iMorador } from "../models/morador.model";
import moradorRepository from "../repositories/morador.repository";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretJWT = process.env.JWT_SECRET_KEY || "";

class MoradoresService {

    getAll() {
        return moradorRepository.getAll();
    }

    getPorDocumento(documento: string) {
        return moradorRepository.getPorDocumento(documento);
    }

    async authorization(documento: string, senha: string) {
        const morador = await moradorRepository.getPorDocumento(documento);

        if (!morador) throw new Error("Morador não encontrado!");

        const result = await bcrypt.compare(senha, morador.senha);

        if (result) {
           return jwt.sign({ documento: morador.documento, _id: morador._id }, secretJWT, { expiresIn: '1h' });
        }

       throw new Error("falha na autenticação!");
    }

    async criar(morador: iMorador) {
        if (morador.senha) {
            morador.senha = await bcrypt.hash(morador.senha, 10);
        }
        return moradorRepository.criar(morador);
    }

    remover(documento: string) {
        return moradorRepository.remover(documento);
    }

    atualizar(documento: string, morador: Partial<iMorador>) {
        return moradorRepository.atualizar(documento, morador);
    }
}

export default new MoradoresService();