import { Request, Response, Router } from 'express'; 
import MoradoresService from '../services/moradores.service';
import { authorizationMiddleware } from '../middlewares/authorization.middleware';

const router = Router();

router.get('/', authorizationMiddleware, async (req: Request, res: Response) => {
    const moradores = await MoradoresService.getAll();
    res.status(200).send(moradores);
});

router.get('/:documento', authorizationMiddleware, async (req: Request, res: Response) => {
    const morador = await MoradoresService.getPorDocumento(req.params.documento);
    if (!morador) return res.status(400).send({ message: " Morador não encontrado! "});
    res.status(200).send(morador);
});

router.post('/', authorizationMiddleware,  async (req: Request, res: Response) => {  
    await MoradoresService.criar(req.body);
    res.status(201).send({ message: "Morador criado com sucesso!"});
})

router.post('/authorization', async (req: Request, res: Response) => {
    try {
        const token = await MoradoresService.authorization(req.body.documento, req.body.senha);
        res.status(200).send({ token });
    } catch(error: any) {
        res.status(401).send({ message: error.message });
    }
})

router.delete('/remove', authorizationMiddleware, async (req: Request, res: Response) => {
    try {
        await MoradoresService.remover(req.body.documento);
        res.status(200).send({ message: "Morador removido com sucesso! "});
    } catch(error: any) {
        res.status(400).send({message: error.message})
    }   
});

router.put('/atualizar', authorizationMiddleware, async (req: Request, res: Response)=> {
   try {
        await MoradoresService.atualizar(req.body.documento, req.body);
        res.status(200).send({ message: "Morador atualizado com sucesso! "});
   } catch(error: any) {
        res.status(400).send({ message: error.message})
   }
})

export default router;