
module.exports = {
    attributes: {
        owner: 'number',
        friend: 'number'
    },
    
    
    addToFriends: async function(owner, friendId) {
        
        let query = `
            insert into link
            (createdAt, updatedAt, owner, friend) values ($1, $2, $3, $4);
        `
        let ms = new Date().getTime();
        let results = await sails.sendNativeQuery(query, [ms, ms, owner, friendId]);
        console.log("ket qua cua them ban ", results);

    },
    getFriendIds: async function(owner) {
        let link = await Link.find({'owner': owner})
        return link.map(row => row.friend);
    }

}