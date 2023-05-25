import express from 'express';
import getCartController from '../../controller/cart/getCart.js';
import addProductToCart from '../../controller/cart/addToCart.js';
import deleteCartsProduct from '../../controller/cart/deleteProductFromCart.js';
import getTotalCartPrice from '../../controller/cart/getPrice.js';

const cartRouter = express.Router();
cartRouter.get('/cart', auth, getCartController);
cartRouter.post('/cart/:productId', auth, addProductToCart);
cartRouter.delete('/deletecart/:productId', auth, deleteCartsProduct);
cartRouter.get('/totalprice', auth, getTotalCartPrice);
cartRouter.put('/updateQuantity/:productId', auth, updateQuantityController);
export default cartRouter;
