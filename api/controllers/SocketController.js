module.exports = {
    findUser: async function(req, res) {
        if (!req.isSocket) {
            return res.badRequest();
        }
        let searchPattern = req.body.searchPattern;
        let user = await Account.findUser(searchPattern);
        sails.sockets.broadcast(sails.sockets.getId(req), 'findUser', user);
        res.ok();
    },

    online: async function(req, res) {
        if (!req.isSocket) {
            return res.badRequest();
        }
        await Account.update({
            'id': req.session.userId
        })
        .set({
            socketId: sails.sockets.getId(req),
        })
        let talkRooms = await Account.getAllTalkRooms(req.session.userId);
        
        sails.sockets.join(req, talkRooms);
        res.ok();
    },

    sendMessage: async function(req, res) {
        if (!req.isSocket) {
            return res.badRequest();
        }
        let talkId = req.body.roomName;
        let text = req.body.text;
        let owner = req.session.userId;

        let user = await Account.findOne({
            where: {
                id: owner
            },
            select: ['id', 'name', 'avatar']

        })
    
        sails.sockets.broadcast(talkId, 'sendMessage', {
            text: text,
            owner: user,
            talkId: talkId,
        })

        let message = await Message.create({
            text: text,
        })
        .fetch();

        let messageId = message.id;

        await Talk.addToCollection(talkId, 'messages')
        .members([messageId]);

        await Account.addToCollection(owner, 'messages')
        .members([messageId]);

        
        res.ok();
    },

    joinRoom: async function(req, res) {
  
        if (!req.isSocket) {
            return res.badRequest();
        }
        let talkId = req.body.talkId;

        sails.sockets.join(req, talkId);
    }
}