import express from 'express';

const router = express.Router();

router.get('/login', (req, res) => {
    res.send("test login router from router folder")
})





export default router;