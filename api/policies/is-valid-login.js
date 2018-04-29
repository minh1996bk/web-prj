module.exports = async function(req, res, next) {
    if (!req.body || !req.body.username || !req.body.pwd) {
        return res.json({
            success: false,
            msg: "Yểu cầu tài khoản và mật khẩu",
        })
    } else {
        return next();
    }
}