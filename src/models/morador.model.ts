import { Schema } from 'mongoose';
import mongoose from 'mongoose';

export interface iMorador {
    nome: string,
    documento: string,
    email: string,
    senha: string,
    unidade: number,
    bloco: string,
    idade: number,
    createdAt: string | Date;
}

export const moradorSchema = new Schema<iMorador>({
    nome: { type: String },
    documento: { type: String },
    email: { type: String },
    senha: { type: String },
    unidade: { type: Number },
    bloco: { type: String },
    idade: { type: Number },
    createdAt: { type: Date, default: new Date() }
});

export const Morador = mongoose.model<iMorador>('Morador', moradorSchema);