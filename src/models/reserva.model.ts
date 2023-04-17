import { Schema } from 'mongoose';
import mongoose from 'mongoose';

export interface iReserva {
    lugar: string,
    data: string,
    morador: string,
    email: string,
    unidade: number,
    bloco: string,
    taxa: number,
    createdAt: string | Date;
}

export const reservaSchema = new Schema<iReserva>({
    lugar: { type: String },
    data: { type: String },
    morador: { type: String },
    email: { type: String },
    unidade: { type: Number },
    bloco: { type: String },
    taxa: { type: Number },
    createdAt: { type: Date, default: new Date() }
});

export const Reserva = mongoose.model<iReserva>('Reserva', reservaSchema);