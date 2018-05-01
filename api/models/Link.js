
module.exports = {
    attributes: {
        owner: 'number',
        friend: 'number'
    },
    
    
    addToFriends: async function(owner, friendId) {
        
        let query = `
            insert into link
            (createAt, updateAt, owner, friend) values ($1, $2, $3, $4);
        `
        let ms = new Date().getMilliseconds();
        let results = await sails.sendNativeQuery(query, [ms, ms, owner, friendId]);
        console.log("ket qua cua them ban ", results);

    },
    getFriendIds: async function(owner) {
        let link = await Link.findOne({'owner': owner})
        return link.friends;
    }

}