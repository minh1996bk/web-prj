function chatHtml(messages, host, talkId) {
 
    let messagesText = "";
    messages.forEach(msg => {
        messagesText += aMessageHtm(msg, host);
    })


    return `
    
    <div>
        <input id='inputCurrentTalk' type='hidden' value='${talkId}'>
        <div class="row chat-window " id="chat_window_1" style="margin-left:10px;">
            <div class="col-xs-12 col-md-12">
                <div class="panel panel-default chat-box">
                    <div class="panel-heading top-bar">
                        <div class="col-md-8 col-xs-8">
                            <h3 class="panel-title"><span class="glyphicon glyphicon-comment"></span> Chat</h3>
                        </div>
                    </div>
                    <div id="messages-view" class="panel-body msg_container_base">
                        ${messagesText}
                    </div>
                    <div class="panel-footer input-chat">
                        <div class="input-group">
                            <input id="input-message-text" type="text" class="form-control input-sm chat_input" onkeypress="return sendMessageEnter(event, ${talkId})" placeholder="Write your message here..." />
                            <span class="input-group-btn">
                            <button class="btn btn-primary btn-sm" id="btn-chat" onclick="sendMessage(${talkId})">Send</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="btn-group dropup">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                <span class="glyphicon glyphicon-cog"></span>
                <span class="sr-only">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu" role="menu">
                <li><a href="#" id="new_chat"><span class="glyphicon glyphicon-plus"></span> Novo</a></li>
                <li><a href="#"><span class="glyphicon glyphicon-list"></span> Ver outras</a></li>
                <li><a href="#"><span class="glyphicon glyphicon-remove"></span> Fechar Tudo</a></li>
                <li class="divider"></li>
                <li><a href="#"><span class="glyphicon glyphicon-eye-close"></span> Invisivel</a></li>
            </ul>
        </div>
    </div>
    `
}

function leftSideMessageHtm(talks) {
    let name = "";
    let htm = "";
    talks.forEach(talk => {
        htm += `<button type="button" class="list-group-item list-group-item-action" onclick="getTalk(${talk.id})">${talk.name}</button>`
    })
    return `
        <div id="search-chat-room-box" class="list-group" >
            <input id="search-chat-room" class="list-group-item list-group-item-action" oninput="autoComplete()" placeholder="Nhóm chat ....">
            <div id="search-chat-room-dropdown">
        
            </div>
        </div>
        <br>

        <div class="list-group">
            ${htm}
        </div>`;
}

function aMessageHtm(msg, host) {
    if (msg.owner.id == host) {
        return `<div class="row msg_container base_sent">
                            <div class="col-md-10 col-xs-10">
                                <div class="messages msg_sent">
                                    <p>${msg.text}</p>
                              
                                </div>
                            </div>
                            <div class="avatar">
                                <img src="${msg.owner.avatar}" class=" img-responsive-chat ">
                            </div>
                        </div>`;
    } else {
        return `<div class="row msg_container base_receive">
                            <div class="avatar">
                                <img src="${msg.owner.avatar}" class=" img-responsive-chat ">
                            </div>
                            <div class="col-md-10 col-xs-10">
                                <div class="messages msg_receive">
                                    <p>${msg.text}</p>
                                    
                                </div>
                            </div>
                        </div>`;
    }
}