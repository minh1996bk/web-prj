module.exports = {
    attributes: {
        owner: {
            model: 'account'
        },
        text: 'string',
        img: 'string',
        comments: {
            collection: 'comment',
            via: 'post'
        },
        likers: {
            collection: 'account',
            via: 'likedposts',
        },
        sharers: {
            collection: 'account',
            via: 'sharedposts'
        },
        group: {
            model: 'group'
        }
    }
}