import { Router } from 'express';
import healthRoutes from './health.routes';
import submissionRoutes from './submission.routes';
import authRoutes from './auth.routes';
import announcementRoutes from './announcement.routes';
import diplomaRoutes from './diploma.routes';

const router = Router();

// API Modules
router.use('/', healthRoutes);
router.use('/auth', authRoutes);
router.use('/submissions', submissionRoutes);
router.use('/announcements', announcementRoutes);
router.use('/diplomas', diplomaRoutes);

export default router;
