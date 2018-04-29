module.exports = async function(req, res, next) {
    if (!req.session || !req.session.userId) {
        return res.status(401);
    } else {
        return next();
    }
}