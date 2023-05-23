import express from 'express';

const router = express.Router();

router.post('/login', (req, res) => {
    console.log(req.body, 'reqnew');
    res.send({responseRecienve: 'truee'})
})





export default router;