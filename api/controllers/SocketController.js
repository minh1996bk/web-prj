module.exports = {
    findUser: async function(req, res) {
        if (!req.isSocket) {
            return res.badRequest();
        }
        let searchPattern = req.body.searchPattern;
        let user = await Account.findUser(searchPattern);
        sails.sockets.broadcast(sails.sockets.getId(req), 'findUser', user);
        res.ok();
    }
}