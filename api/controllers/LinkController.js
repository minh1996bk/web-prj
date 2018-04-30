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

    }

}