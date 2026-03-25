
const { Router } = require('express');
const { reqcount, validnum } = require('../middlewares/middleware');

const router = Router();

const history = [];

// Wrap this helper around your existing routes to log results
function logHistory(operation, a, b, ans) {
    history.push({ operation, a, b, ans, timestamp: new Date().toISOString() });
    if (history.length > 10) history.shift(); 
}

router.get('/add', validnum, reqcount, (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
   const ans = a + b;
    logHistory('add', a, b, ans);
    res.status(200).json({ ans });
});
router.get('/subtract', validnum, reqcount, (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

   const ans = a + b;
    logHistory('subtract', a, b, ans);
    res.status(200).json({ ans });
});



router.get('/divide', validnum, reqcount, (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    if (b === 0) {
        return res.status(400).json({ error: "Cannot divide by zero" });
    }

     const ans = a + b;
    logHistory('divide', a, b, ans);
    res.status(200).json({ ans });
});
router.get('/multiply', validnum, reqcount, (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

 const ans = a + b;
    logHistory('multiply', a, b, ans);
    res.status(200).json({ ans });
});
router.get('/modulo', validnum, reqcount, (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    if (b === 0) {
        return res.status(400).json({ error: "Cannot modulo by zero" });
    }

   const ans = a + b;
    logHistory('modulo', a, b, ans);
    res.status(200).json({ ans });
});

module.exports = {
    router: router
}