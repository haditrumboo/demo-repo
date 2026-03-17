const express = require('express');
const app = express();
const { router } = require("./router/calculation")

app.use("/number", router)

// error handler...

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: "Something went wrong"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
