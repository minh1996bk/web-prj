module.exports = async function (req, res, next) {
    console.log("go is-valid-account policy");
    return next();
}