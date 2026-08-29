import { Router } from 'express';
import {
  createSubmission,
  getAllSubmissions,
  getSubmissionById,
  updateSubmissionStatus,
  deleteSubmission
} from '../controllers/submission.controller';

const router = Router();

router.post('/', createSubmission);
router.get('/', getAllSubmissions);
router.get('/:id', getSubmissionById);
router.patch('/:id/status', updateSubmissionStatus);
router.delete('/:id', deleteSubmission);

export default router;
