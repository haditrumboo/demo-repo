const express = require('express');
const app = express();

let count = 0; // g counter.

function reqcount(req, res, next) {
    count++;
    const time = new Date().toLocaleTimeString();
    console.log(`Request #${count} | Method: ${req.method} | Path: ${req.path} | Time: ${time}`);
    next();
}
function validnumbers(req, res, next) {  
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({
            error: "please enter a valid number."
        });
    }
    next();  
}
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: "Something went wrong"
    });
});


app.use(reqcount);

app.get('/add', validnumbers, (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({
        ans: a + b
    });
});
app.get('/subtract', validnumbers, (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.json({
        ans: a - b
    });
});



app.get('/divide', validnumbers, (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    if (b === 0) {
        return res.status(400).json({ error: "Cannot divide by zero" });
    }

    res.json({ ans: a / b });
});
app.get('/multiply', validnumbers, (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.json({
        ans: a * b
    });
});



app.listen(3000, () => {
    console.log("Server running on port 3000");
});
