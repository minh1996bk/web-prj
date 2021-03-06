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
      avatar: 'string',
      socketId: 'string',
      posts: {
          collection: 'post',
          via: 'owner'
      },
      likedposts: {
          collection: 'post',
          via: 'likers'
      },
      sharedposts: {
          collection: 'post',
          via: 'sharers'
      },
      roles: {
          collection: 'role',
          via: 'owners'
      },
      talks: {
          collection: 'talk',
          via: 'members',
      },
      messages: {
          collection: 'message',
          via: 'owner'
      },
      groups: {
          collection: 'group',
          via: 'owner',
      },
      ingroups: {
          collection: 'group',
          via: 'members'
      }
    },
    createAccount: async function(account) {
        let hashPwd = await bcrypt.hash(account.pwd, salt);
        await Account.create({
            username: account.username,
            name:account.name,
            pwd: hashPwd,
            avatar: 'images/default-avatar.png',
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
        
    },

    findUser: async function(searchPattern) {
        return await Account.find({
            or: [
                {
                    name: {
                        contains: searchPattern
                    }
                },
                {
                    phone: {
                        contains: searchPattern
                    }
                },
                {
                    email: {
                        contains: searchPattern
                    }
                }
            ]
        })
        .limit(10);
    },

    getFriends: async function(friendIds) {
        return await Account.find({
                where: {
                    id: {
                        'in' : friendIds
                    }
                },
                select: ['id', 'name', 'avatar']
            })
        },
    getAllTalkRooms: async function(userId) {
        let account = await Account.findOne({'id' : userId})
        .populate('talks');

        return account.talks.map(talk => talk.id);
    },

    getNames: async function(userIds) {
        let users =  await Account.find({
            where: {
                id: {
                    'in' : userIds
                }
            },
            select: ['name']
        });

        return users.map(user => {
            return user.name;
        })
    
    }
}