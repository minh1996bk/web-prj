
module.exports = {
    attributes: {
        owner: 'number',
        friend: 'number',
    },
    
    
    addToFriends: async function(owner, friendId) {
        
        let query = `
            insert into link
            (createdAt, updatedAt, owner, friend) values ($1, $2, $3, $4);
        `
        let ms = new Date().getTime();
        await sails.sendNativeQuery(query, [ms, ms, owner, friendId]);
        await sails.sendNativeQuery(query, [ms, ms, friendId, owner]);


    },
    getFriendIds: async function(owner) {
        let link = await Link.find({'owner': owner})
        return link.map(row => row.friend);
    },
    getTalkId: async function(owner, friend) {
        let link = await Link.findOne({
            owner: owner,
            friend: friend
        });

        return link.talkId;
    } 

}