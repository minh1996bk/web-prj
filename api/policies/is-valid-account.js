module.exports = async function (req, res, next) {
    if (await Account.isExist(req.body.username)) {
        return res.json({
            success: false,
            msg: "username đã tồn tại",
        })
    }
    if (req.body.pwd != req.body.pwdrepeat) {
        return res.json({
            success: false,
            msg: '2 mật khẩu phải giống nhau'
        })
    }
    return next();
}