import express, { Router } from 'express';
import { addNumber } from '../controllers/calculation';

const router:Router = express.Router();

router.get('/add-number/:numberOne/:numberTwo',addNumber)


export default router;