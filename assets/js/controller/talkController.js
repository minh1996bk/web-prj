async function doChat(talkId, userId) {
    if (talkId == -1) {
        talkId = await createChat(userId);
    }
    showLeftSide(talkId);
    showMainSide(talkId);
}

async function createChat(userId) {
    let rep = await $.post('/createChat', {
        userId: userId,
        name: "",
    });
    if (!rep) return error500();
    if (!rep.success) {
        return showReport(rep.msg);
    };

    return rep.talkId;
}

async function showLeftSide(talkId) {
    let rep = await $.get('/talks');
    if (!rep) return error500();
    if (!rep.success) {
        return showReport(rep.msg);
    };
    renderLeftSideMessage(rep.talks);
}

async function showMainSide(talkId) {
    getTalk(talkId);
}


async function getTalk(id) {
    let rep = await $.get('/talk');
    if (!rep) return error500();
    if (!rep.success) {
        return showReport(rep.msg);
    };
    renderMainSideMessage(rep.talk.messages, rep.host);
}


async function messagesOnclick() {
    let rep = await $.get('/talks');
    if (!rep) return error500();
    if (!rep.success) {
        return showReport(rep.msg);
    };
    renderLeftSideMessage(rep.talks);
    getTalk(rep.talks[0].id);
}

function renderLeftSideMessage(talks) {
    let leftHtm = leftSideMessageHtm(talks);
    let leftside = $("#leftside");
    leftside.empty();
    leftside.append(leftHtm);
}

function renderMainSideMessage(messages, host) {
    let htm = chatHtml(messages, host);
    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);
}