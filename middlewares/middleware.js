let count = 0; // g counter.

const reqcount = function reqc(req, res, next) {
    count++;
    const time = new Date().toLocaleTimeString();
    console.log(`Request #${count} | Method: ${req.method} | Path: ${req.path} | Time: ${time}`);
    next();
}
const validnum = function validnumbers(req, res, next) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({
            error: "please enter a valid number."
        });
    }
    next();
}
module.exports = {
    reqcount,
    validnum
}