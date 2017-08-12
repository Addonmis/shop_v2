import express from 'express';

import * as ProductController from '../controllers/product';

const router = express.Router();

router.get('/product/:id_product', ProductController.getProduct);

export default router;
