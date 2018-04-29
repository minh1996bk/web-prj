const bcrypt = require('bcrypt');
const salt = 13;
module.exports = {
    attributes: {
      username: { type: 'string', required: true },
      pwd: { type: 'string', required: true },
      name: 'string',
      phone: 'string',
      email: 'string',
      dob: 'string',
      address: 'string',
      nativeland: 'string',
      highschool: 'string',
      university: 'string',
      corp: 'string',
    },
    createAccount: async function(account) {
        let hashPwd = await bcrypt.hash(account.pwd, salt);
        await Account.create({
            username: account.username,
            pwd: hashPwd
        });
    },
    isExist: async function(username) {
        let rep = await Account.findOne({'username': username});
        if (rep) return true;
        else return false;
    },
    doLogin: async function(account) {
        let rep = await Account.findOne({'username': account.username});
        if (!rep) return false;
        let check = await bcrypt.compare(account.pwd, rep.pwd);
        if (!check) return false;
        return rep.id;
        
    }
}