import express from 'express';

import * as HomeController from '../controllers/home';

const router = express.Router();

router.get('/', HomeController.getAllItems);

export default router;
