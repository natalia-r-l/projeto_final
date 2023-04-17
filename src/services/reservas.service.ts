import dotenv from 'dotenv';
import reservaRepository from "../repositories/reserva.repository";
import { iReserva } from "../models/reserva.model";

dotenv.config();

class ReservasService {

    getAll() {
        return reservaRepository.getAll();
    }

    getPorId(id: string) {
        return reservaRepository.getPorId(id);
    }

    criar(reserva: iReserva) {
        return reservaRepository.criar(reserva);
    }

    remover(id: string) {
        return reservaRepository.remover(id);
    }

    atualizar(id: string, reserva: Partial<iReserva>) {
        return reservaRepository.atualizar(id, reserva);
    }
}

export default new ReservasService();