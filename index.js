const express = require('express');
const app = express();

let count = 0; // g counter.

function reqcount(req, res, next) {
    count++;
    console.log(`Number of requests: ${count}`);
    next();
}

app.use(reqcount);

app.get('/', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.json({
        ans: a + b
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
