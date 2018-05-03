module.exports = {
    
    createLink: async function(req, res) {
        await Link.create({
            owner: req.session.userId
        })
        return res.json({
            success: true,
        })
    },
    updateLink: async function(req, res) {
        
       await Link.addToFriends(req.session.userId, req.body.friendId);
       return res.json({
           success: true,
           msg: "Kết bạn thành công"
       })
    },
    deleteLink: async function(req, res) {

    },

    getFriends: async function(req, res) {
        let friendIds = await Link.getFriendIds(req.session.userId);
        let friends = await Account.getFriends(friendIds);
        return res.json({
            success: true,
            friends: friends,
        })
    },
    addFriend: async function(req, res) {
        let owner = req.session.userId;
        let friendId = req.body.friendId;

        await Link.addToFriends(owner, friendId);
        return res.json({
            success: true,
            msg: "Kết bạn thanh công"
        })
    }

}