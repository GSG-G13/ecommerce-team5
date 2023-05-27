import express from 'express';
import { getProductsHandler } from '../controller/getproductshandler.js';
import getCartController from '../controller/cart/getCart.js';
import getSingleProductController from '../controller/getSingleProductController.js';
import getCategoriesController from '../controller/getCategoryController.js';
import signUpHandler from '../controller/singup.js';
import loginHandler from '../controller/login.js';

const router = express.Router();

router.post('/login', (req, res) => {
  console.log(req.body, 'reqnew');
  res.send({ responseRecienve: 'truee' });
});

router.post('/signupform', signUpHandler);


router.post('/loginform', loginHandler)

router.get('/products', getProductsHandler);

router.get('/cart', getCartController);

router.get('/products?category=category', getProductsHandler);

router.get('/cart', getCartController);

router.get('/categories', getCategoriesController);

export default router;
