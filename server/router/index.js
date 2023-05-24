import express from 'express';
import {getProductsHandler} from '../controller/getproductshandler.js';
import getCartHandler from '../controller/getcarthandler.js';

const router = express.Router();

router.post('/login', (req, res) => {
    console.log(req.body, 'reqnew');
    res.send({responseRecienve: 'truee'})
})

router.post('/signupform', (req, res) => {
    console.log(req.body);
    res.send('singup test success')
})

router.get('/products', getProductsHandler);

router.get('/cart', getCartHandler)

export default router;




