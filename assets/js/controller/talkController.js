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
    let rep = await $.get(`/talk/${id}`);
    if (!rep) return error500();
    if (!rep.success) {
        return showReport(rep.msg);
    };
    renderMainSideMessage(rep.talk.messages, rep.host, id);
}


async function messagesOnclick() {
    hideNewMessageIcon();
    let rep = await $.get('/talks');
    if (!rep) return error500();
    if (!rep.success) {
        return showReport(rep.msg);
    };
    renderLeftSideMessage(rep.talks);

    if (!rep.talks) {
        getTalk(rep.talks[0].id);
    }
    
}

function renderLeftSideMessage(talks) {
    let leftHtm = leftSideMessageHtm(talks);
    let leftside = $("#leftside");
    leftside.empty();
    leftside.append(leftHtm);
}

function renderMainSideMessage(messages, host, talkId) {
    let htm = chatHtml(messages, host, talkId);
    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);
}

function sendMessage(talkId) {
    let textInput = $('#input-message-text');
    let text = textInput.val();
    if (!text) return;
    textInput.val("");
    io.socket.post('/sendMessage', {
        roomName: talkId,
        text: text,

    }, (res, jw) => {
        console.log(res, jw)
    });

}

function sendMessageEnter(i, talkId) {

    if(i.key == "Enter") {
        sendMessage(talkId);
    }
}

function showNewMessageIcon() {
    $('#icon-new-message').addClass('glyphicon glyphicon-envelope');
}

function hideNewMessageIcon() {
    $('#icon-new-message').removeClass('glyphicon glyphicon-envelope');
}