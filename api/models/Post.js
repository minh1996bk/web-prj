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
    },

    getPostsIn: async function(userIds) {
        return await Post.find({
            where: {
                owner: {
                    'in' : userIds
                }
            },
            select: ['createdAt', 'id', 'text', 'img', 'owner']
        })
        .sort([{createdAt: 'DESC'}])
        .populate('owner');
    },
    getPostsNotIn: async function(userIds) {
        return await Post.find({
            where: {
                owner: {
                    'nin' : userIds
                }
            },
            select: ['createdAt', 'id', 'text', 'img', 'owner']
        })
        .sort([{createdAt: 'DESC'}])
        .populate('owner');
    }
}