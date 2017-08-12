import express from 'express';

import * as AuthController from '../controllers/auth';

const router = express.Router();

router.post('/login', AuthController.signin);
router.post('/signup', AuthController.signup);

export default router;
