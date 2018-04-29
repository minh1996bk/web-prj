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
                msg: 'username not exist or pwd wrong',
            })
        }
    },

    logoutAccount: async function doLogout(req, res) {

    }
}