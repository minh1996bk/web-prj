module.exports = {
    createTalk: async function(req, res) {
        let owner = req.session.userId;
        let members = req.body.members;

        let newTalk = await Talk.create({
            name: req.body.name,
        })
        .fetch();
       
        
        members.push(owner);

        await Talk.addToCollection(newTalk.id, 'members')
        .members(members);
        
        return res.json({
            success: true,
            talkId: newTalk.id,
        })
        
    },
    getTalks: async function(req, res) {
        let account = await Account.findOne({
            'id': req.session.userId,
        })
        .populate('talks');
        return res.json({
            success: true,
            talks: account.talks,
        })
    },

    getTalk: async function(req, res) {
        let talk = await Talk.findOne({'id': req.params.id})
        .populate('members').populate('messages');
        let messages = talk.messages;

        let messageOwners = await Account.find({
            where: {
                id: _.pluck(messages, 'owner')
            },
            select: ['id', 'name', 'avatar']
        });
        messageOwners = _.indexBy(messageOwners, 'id');
        messages = messages.map(msg => {
            msg.owner = messageOwners[msg.owner];
            return msg;
        })

        return res.json({
            success: true,
            host: req.session.userId,
            talk: talk,
        })
    }
}