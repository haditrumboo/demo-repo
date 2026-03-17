
const { Router } = require('express');
const { reqcount, validnum } = require('../middlewares/middleware');

const router = Router();

router.get('/add', validnum, reqcount, (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.status(200).json({
        ans: a + b
    });
});
router.get('/subtract', validnum, reqcount, (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.status(200).json({
        ans: a - b
    });
});



router.get('/divide', validnum, (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    if (b === 0) {
        return res.status(400).json({ error: "Cannot divide by zero" });
    }

    res.status(200).json({ ans: a / b });
});
router.get('/multiply', validnum, (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.status(200).json({
        ans: a * b
    });
});

module.exports = {
    router: router
}