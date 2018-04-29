module.exports = async function (req, res, next) {
    if (await Account.isExist(req.body.username)) {
        return res.json({
            success: false,
            msg: "username exist",
        })
    }
    if (req.body.pwd != req.body.pwdrepeat) {
        return res.json({
            success: false,
            msg: 'two pwd not like other'
        })
    }
    return next();
}