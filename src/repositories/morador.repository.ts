import { Morador, iMorador } from '../models/morador.model';

class MoradorRepository {
    getAll() {
        return Morador.find();
    }

    getPorDocumento(documentoProcurado: string) {
        return Morador.findOne({ documento: documentoProcurado })
    }

    criar(morador: iMorador) {
        return Morador.create(morador);
    }

    atualizar(documentoProcurado: string, morador: Partial<iMorador>) {
        return Morador.updateOne({ documento: documentoProcurado }, { $set: morador });
    }

    remover(documentoProcurado: string) {
        return Morador.deleteOne({ documento: documentoProcurado });
    }
}

export default new MoradorRepository();