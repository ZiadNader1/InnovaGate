import { Router } from 'express';
import { getDiplomas, getDiplomaById } from '../controllers/diploma.controller';

const router = Router();

router.get('/', getDiplomas);
router.get('/:id', getDiplomaById);

export default router;
