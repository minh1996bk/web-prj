module.exports = {
    getPost: async function(req, res) {

    },
    createPost: async function(req, res) {
        await Post.create({
            owner: req.session.userId,
            text: req.body.text,
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
        res.json({
            success: true,
        })
    }
}