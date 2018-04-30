module.exports = async function(req, res, next) {
    if (!req.session || !req.session.userId) {
        return res.json({
            success: false,
            msg: "Bạn phải đăng nhập để sử tính năng này",
        })
    } else {
        return next();
    }
}