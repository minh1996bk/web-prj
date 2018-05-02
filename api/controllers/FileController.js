module.exports = {
    uploadAvatar: async function(req, res) {
        req.file('image').upload({
            dirname: require('path').resolve(sails.config.appPath, 'assets/images')
        },function (err, uploadedFiles) {
            if (err) return res.serverError(err);
            let fd = uploadedFiles[0].fd;
            let url = fd.substring(fd.length - 40);
            return res.json({
                imageUrl: url
            });
        });
    }
}