module.exports = {
    attributes: {
        name: 'string',
        members: {
            collection: 'account',
            via: 'talks'
        },
        messages: {
            collection: 'message',
            via: 'talk'
        }
    }
}