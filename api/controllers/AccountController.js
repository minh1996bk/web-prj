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
    },

    updateAccount: async function doUpdate(req, res) {
        await Account.update({'id': req.session.userId})
        .set({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            dob: req.body.dob,
            address: req.body.address,
            nativeland: req.body.nativeland,
            highschool: req.body.highschool,
            university: req.body.university,
            corp: req.body.corp,
        });

        return res.json({
            success: true
        })
    },
    getAccountInfo: async function(req, res) {
        let account = await Account.findOne({'id': req.session.userId});
        return res.json({
            success: true,
            account: account,
        });
    },
    getSupports: async function(req, res) {
        return res.json({
            success: true,
            contactPhone: "0974066924",
            contactMail: "minh1996bk@gmail.com",
        })
    }
}