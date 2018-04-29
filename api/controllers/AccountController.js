module.exports = {
    registerAccount: async function doRegister(req, res) {
        await Account.createAccount({
            username: req.body.username,
            pwd: req.body.pwd
        })
        return res.json({
            success: true,
        });

    },

    loginAccount: async function doLogin(req, res) {
        let rep = await Account.doLogin({
            username: req.body.username,
            pwd: req.body.pwd
        })
        if (rep) {
            req.session.userId = rep;
            return res.json({
                success: true,
            })
        } else {
            return res.json({
                success: false,
                msg: 'Tài khoản hoặc mật khẩu sai',
            })
        }
    },

    logoutAccount: async function doLogout(req, res) {
        if (req.session) {
            delete req.session.userId;
        }
        res.end();
    }
}