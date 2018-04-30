module.exports = {
    attributes: {
        owner: {
            model: 'account',
            unique: true
        },
        friends: {
            collection: 'account',
            via: 'owner'
        }
    },
    addToFriends: async function(owner, friendId) {
        let link = await Link.findOne({'owner': owner});
        console.log(link);
        await Link.addToCollection(link.id, 'friends')
        .members(friendId);
    },
    getFriendIds: async function(owner) {
        let link = await Link.findOne({'owner': owner})
        return link.friends;
    }

}