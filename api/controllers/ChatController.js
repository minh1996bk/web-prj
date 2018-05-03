module.exports = {
    createChat: async function(req, res) {
        let owner = req.session.userId;
        let friend = req.body.userId;

        let newTalk = await Talk.create({
            name: req.body.name,
        })
        .fetch();
       
        
        let members = [owner, friend];
        let talkId = newTalk.id;

        await Talk.addToCollection(talkId, 'members')
        .members(members);
        await Chat.createChat(owner, friend, talkId);
        return res.json({
            success: true,
            talkId: talkId,
        })

    }
}