module.exports = {
    attributes: {
        name: 'string',
        roles: {
            collection: 'role',
            via: 'permissions'
        }
    }
}