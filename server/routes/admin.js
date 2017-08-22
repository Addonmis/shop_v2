import express from 'express';

import * as UserController from '../controllers/admin';

const router = express.Router();

router.get('/admin', UserController.getAdmin);

export default router;