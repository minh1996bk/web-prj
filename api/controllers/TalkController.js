module.exports = {
    createTalk: async function(req, res) {
        let owner = req.session.userId;
        let members = req.body.members;

        if (req.body.withFriend) {
            let friendId = members[0];
            let talkId = await Link.getTalkId(owner, friendId);
            if (talkId) return res.json({
                success: true,
                talkId: talkId,
            })
        }
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
        return res.json({
            success: true,
            host: req.session.userId,
            talk: talk,
        })
    }
}