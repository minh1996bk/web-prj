module.exports = async function home(req, res) {
    if (!req.session || !req.session.userId) {
        return res.view('pages/homepage', {
            isLogIned: false
        })
    } else {
        return res.view('pages/homepage', {
            isLogIned: true
        })
    }
}