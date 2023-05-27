import express from 'express';
import { getProductsHandler } from '../controller/getproductshandler.js';
import getCartController from '../controller/cart/getCart.js';
import getSingleProductController from '../controller/getSingleProductController.js';
import getCategoriesController from '../controller/getCategoryController.js';
import loginHandler from '../controller/login.js';
import signUpHandler from '../controller/singup.js';

const router = express.Router();

router.post('/login', loginHandler);

router.post('/signupform', signUpHandler);

router.get('/products', getProductsHandler);

router.get('/products/:id', getSingleProductController);

router.get('/products?category=category', getProductsHandler);

router.get('/cart', getCartController);

router.get('/categories', getCategoriesController);

export default router;
