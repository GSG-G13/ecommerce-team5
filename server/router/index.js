import express from 'express';
import { getProductsHandler } from '../controller/getproductshandler.js';
import getCartController from '../controller/cart/getCart.js';
import getSingleProductController from '../controller/getSingleProductController.js';
import getCategoriesController from '../controller/getCategoryController.js';

const router = express.Router();

router.post('/login', (req, res) => {
  console.log(req.body, 'reqnew');
  res.send({ responseRecienve: 'truee' });
});

router.post('/signupform', (req, res) => {
  console.log(req.body);
  res.send('singup test success');
});

router.get('/products', getProductsHandler);

router.get('/products/:id', getSingleProductController);

router.get('/products?category=category', getProductsHandler);

router.get('/cart', getCartController);

router.get('/categories', getCategoriesController);

export default router;
