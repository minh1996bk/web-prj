module.exports = {
    createTalk: async function(req, res) {
        let owner = req.session.userId;
        let members = req.body.members;

        if (req.body.withFriend) {
            let friendId = members[0];
            let talkId = await Link.getTalkId(owner, friendId);
            if (talkId) return res.json({
                success: true,
                talkId: talkId,
            })
        }
        let newTalk = await Talk.create({
            name: req.body.name,
        })
        .fetch();
       
        
        members.push(owner);

        await Talk.addToCollection(newTalk.id, 'members')
        .members(members);
        
        return res.json({
            success: true,
            talkId: newTalk.id,
        })
        
    },
    getTalks: async function(req, res) {
        return res.json({
            success: true,
            talks: [
                {
                    id: 1,
                    name: "Helo",
                    members: [
                        {
                            id: 1,
                            name: "Minh",
                            avatar: 'icon.jpg'
                        },
                        {
                            id: 2,
                            name: "Nam",
                            avatar: "icon-user.png"
                        }
                    ]
                },
                {
                    id: 2,
                    name: "Dm",
                    members: [
                        {
                            id: 1,
                            name: "Minh",
                            avatar: 'icon.jpg'
                        },
                        {
                            id: 2,
                            name: "Nam",
                            avatar: "icon-user.png"
                        }
                    ]
                },
                {
                    id: 3,
                    name: "Ok",
                    members: [
                        {
                            id: 1,
                            name: "Minh",
                            avatar: 'icon.jpg'
                        },
                        {
                            id: 2,
                            name: "Nam",
                            avatar: "icon-user.png"
                        }
                    ]
                }
            ]
        })
    },

    getTalk: async function(req, res) {
        return res.json({
            success: true,
            host: req.session.userId,
            talk: {
                id: 1,
                name: "Hello",
                members: [
                    {
                        id: 1,
                        name: "Minh",
                        avatar: 'icon.jpg'
                    },
                    {
                        id: 2,
                        name: "Nam",
                        avatar: "icon-user.png"
                    }
                ],
                messages: [
                    {
                        owner: {
                            id: 1,
                            name: "Minh",
                            avatar: 'icon.jpg'
                        },
                        text: "dcm chung may met vl"
                    },
                    {
                        owner: {
                            id: 2,
                            name: "Nam",
                            avatar: 'icon.jpg'
                        },
                        text: "chui cl"
                    },
                    {
                        owner: {
                            id: 2,
                            name: "Nam",
                            avatar: 'icon.jpg'
                        },
                        text: "chui cl"
                    },
                    {
                        owner: {
                            id: 2,
                            name: "Nam",
                            avatar: 'icon.jpg'
                        },
                        text: "chui cl"
                    },
                    {
                        owner: {
                            id: 2,
                            name: "Nam",
                            avatar: 'icon.jpg'
                        },
                        text: "chui cl"
                    },
                    {
                        owner: {
                            id: 2,
                            name: "Nam",
                            avatar: 'icon.jpg'
                        },
                        text: "chui cl"
                    },
                    {
                        owner: {
                            id: 2,
                            name: "Nam",
                            avatar: 'icon.jpg'
                        },
                        text: "chui cl"
                    },
                    {
                        owner: {
                            id: 2,
                            name: "Nam",
                            avatar: 'icon.jpg'
                        },
                        text: "chui cl"
                    },
                    {
                        owner: {
                            id: 2,
                            name: "Nam",
                            avatar: 'icon.jpg'
                        },
                        text: "chui cl"
                    },
                    {
                        owner: {
                            id: 2,
                            name: "Nam",
                            avatar: 'icon.jpg'
                        },
                        text: "chui cl"
                    }
                ]
            }
        })
    }
}