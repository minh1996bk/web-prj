module.exports = {
    attributes: {
        name: 'string',
        permissions: {
            collection: 'permission',
            via: 'roles'
        },
        owners: {
            collection: 'account',
            via: 'roles'
        }
    }
}