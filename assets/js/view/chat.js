function chatHtml(messages, host) {
    let messagesText = "";
    messages.forEach(msg => {
        if (msg.owner.id == host) {
            messagesText += `<div class="row msg_container base_sent">
                                <div class="col-md-10 col-xs-10">
                                    <div class="messages msg_sent">
                                        <p>that mongodb thing looks good, huh?
                                        tiny master db, and huge document store</p>
                                        <time datetime="2009-11-13T20:00">Timothy • 51 min</time>
                                    </div>
                                </div>
                                <div class="avatar">
                                    <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive ">
                                </div>
                            </div>`;
        } else {
            messagesText += `<div class="row msg_container base_receive">
                                <div class="avatar">
                                    <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive ">
                                </div>
                                <div class="col-md-10 col-xs-10">
                                    <div class="messages msg_receive">
                                        <p>that mongodb thing looks good, huh?
                                        tiny master db, and huge document store</p>
                                        <time datetime="2009-11-13T20:00">Timothy • 51 min</time>
                                    </div>
                                </div>
                            </div>`;
        }
    })


    return `
    
    <div>
        <div class="row chat-window " id="chat_window_1" style="margin-left:10px;">
            <div class="col-xs-12 col-md-12">
                <div class="panel panel-default chat-box">
                    <div class="panel-heading top-bar">
                        <div class="col-md-8 col-xs-8">
                            <h3 class="panel-title"><span class="glyphicon glyphicon-comment"></span> Chat</h3>
                        </div>
                    </div>
                    <div class="panel-body msg_container_base">
                        ${messagesText}
                    </div>
                    <div class="panel-footer input-chat">
                        <div class="input-group">
                            <input id="btn-input" type="text" class="form-control input-sm chat_input" placeholder="Write your message here..." />
                            <span class="input-group-btn">
                            <button class="btn btn-primary btn-sm" id="btn-chat">Send</button>
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
        <div class="list-group">
            ${htm}
        </div>`;
}