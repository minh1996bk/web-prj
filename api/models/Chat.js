module.exports = {
    attributes: {
        talkId: 'number',
        first: 'number',
        second: 'number',
    },

    findChat: async function(first, second) {
        return await Chat.findOne({
            first: first,
            second: second,
        });
    },

    createChat: async function(first, second, talkId) {
        await Chat.create({
            talkId: talkId,
            first: first,
            second: second
        });

        await Chat.create({
            talkId: talkId,
            first: second,
            second: first
        })
    }
}