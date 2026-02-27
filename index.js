// let a = 10;
// let b = 20;
 
// function add (x, y) {
//     return x + y;
// }

console.log(add(a, b));
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({message: 'Hello World!'})
})
app.listen(3000);