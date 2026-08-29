import { Router } from 'express';
import { loginAdmin, getAdminProfile } from '../controllers/auth.controller';

const router = Router();

router.post('/login', loginAdmin);
router.get('/me', getAdminProfile);

export default router;
