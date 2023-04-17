import { Request, Response, Router } from 'express'; 
import { authorizationMiddleware } from '../middlewares/authorization.middleware';
import reservasService from '../services/reservas.service';

const router = Router();

router.get('/', authorizationMiddleware, async (req: Request, res: Response) => {
    const reservas = await reservasService.getAll();
    res.status(200).send(reservas);
});

router.get('/:id', authorizationMiddleware, async (req: Request, res: Response) => {
    const reserva = await reservasService.getPorId(req.params._id);
    if (!reserva) return res.status(400).send({ message: " Reserva não encontrada! "});
    res.status(200).send(reserva);
});

router.post('/', authorizationMiddleware,  async (req: Request, res: Response) => {  
    await reservasService.criar(req.body);
    res.status(201).send({ message: "Reserva criada com sucesso!"});
})

router.delete('/remove', authorizationMiddleware, async (req: Request, res: Response) => {
    try {
        await reservasService.remover(req.body._id);
        res.status(200).send({ message: "Reserva removida com sucesso! "});
    } catch(error: any) {
        res.status(400).send({message: error.message})
    }   
});

router.put('/atualizar', authorizationMiddleware, async (req: Request, res: Response)=> {
   try {
        await reservasService.atualizar(req.body._id, req.body);
        res.status(200).send({ message: "Reserva atualizada com sucesso! "});
   } catch(error: any) {
        res.status(400).send({ message: error.message})
   }
})

export default router;