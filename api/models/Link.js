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
    }
}