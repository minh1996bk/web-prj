module.exports = {
    registerAccount: async function doRegister(req, res) {
        console.log(req.body.username, req.body.pwd);
        res.end();

    },

    loginAccount: async function doLogin(req, res) {

    },

    logoutAccount: async function doLogout(req, res) {

    }
}