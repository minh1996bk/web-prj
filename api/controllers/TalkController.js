module.exports = {
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