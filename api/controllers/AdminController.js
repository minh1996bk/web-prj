module.exports = {
    getSupports: async function(req, res) {
        let data = await Settings.findOne({'version': '1.0.0'});
        return res.json({
            success: true,
            supports: data || {},
        })
    },
    
    getAdminPage: async function(req, res) {
        let data = await Settings.findOne({'version': '1.0.0'});
        if (!data) {
            await Settings.create({
                version: '1.0.0',
            })
        }
        return res.view('pages/admin');
    },

    updateSupports: async function(req, res) {
        await Settings.update({'version': '1.0.0'})
        .set({
            phone: req.body.phone,
            email: req.body.email,
            address: req.body.address,
        })
        return res.json({
            success: true,
            msg: "Cập nhật thông tin thành công",
        })
    }
}