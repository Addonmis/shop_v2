import express from 'express';

import * as UserController from '../controllers/manager';

const router = express.Router();

router.get('/manager', UserController.getManager);

export default router;