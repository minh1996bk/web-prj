module.exports = {
    findUser: async function(req, res) {
        if (!req.isSocket) {
            return res.badRequest();
        }
        sails.sockets.broadcast(sails.sockets.getId(req), 'hello', 'dm');
        res.ok();
    }
}