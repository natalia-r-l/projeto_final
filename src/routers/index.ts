import { Router } from 'express';
import moradoresRouter from './moradores.router';
import reservasRouter from './reservas.router';

const router = Router();

router.use('/moradores', moradoresRouter);
router.use('/reservas', reservasRouter);

export default router;