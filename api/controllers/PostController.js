module.exports = {
    getPost: async function(req, res) {

    },
    createPost: async function(req, res) {
        await Post.create({
            owner: req.session.userId,
            text: req.body.text,
            img: req.body.img,
        })
        return res.json({
            success: true,
            msg: "Đăng bài thành công",
        })
    },
    updatePost: async function(req, res) {

    },
    deletePost: async function(req, res) {

    },
    getPosts: async function(req, res) {
        let userIds = await Link.getFriendIds(req.session.userId);
        userIds.push(req.session.userId);
        let posts = await Post.getPostsIn(userIds);
      
        return res.json({
            success: true,
            posts: posts
        })
    },
    getPublicPosts: async function(req, res) {
        let userIds = await Link.getFriendIds(req.session.userId);
        userIds.push(req.session.userId);
        let posts = await Post.getPostsNotIn(userIds);
      
        return res.json({
            success: true,
            posts: posts
        })
    }
}