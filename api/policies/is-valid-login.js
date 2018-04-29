module.exports = async function(req, res, next) {
    if (!req.body || !req.body.username || !req.body.pwd) {
        return res.json({
            success: false,
            msg: "no username or pwd",
        })
    } else {
        return next();
    }
}