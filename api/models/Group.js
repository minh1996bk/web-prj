module.exports = {
    attributes: {
        name: 'string',
        owner: {
            model: 'account'
        },
        members: {
            collection: 'account',
            via: 'groups',
        },
        posts: {
            collection: 'post',
            via: 'group'
        }
    }
}