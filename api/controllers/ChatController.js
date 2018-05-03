module.exports = {
    createChat: async function(req, res) {
        let owner = req.session.userId;
        let friend = req.body.userId;
        let names = await Account.getNames([owner, friend]);
        let talkName = names.join(',');
        let newTalk = await Talk.create({
            name: talkName,
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