import { Reserva, iReserva } from '../models/reserva.model';

class ReservaRepository {
    getAll() {
        return Reserva.find();
    }

    getPorId(id: string) {
        return Reserva.findOne({ id: id })
    }

    criar(reserva: iReserva) {
        return Reserva.create(reserva);
    }

    atualizar(id: string, reserva: Partial<iReserva>) {
        return Reserva.updateOne({ id: id }, { $set: reserva });
    }

    remover(id: string) {
        return Reserva.deleteOne({ id: id });
    }
}

export default new ReservaRepository();