
function userinfoHtm(user) {
    return `
    <div id="profile-panel" class="modal-body form-group">

        <label for="usr-name-input">Họ và tên:</label>
        <input class="form-control" id="usr-name-input" value="${user.name || ''}">
        <label for="usr-phone-input">Số điện thoại:</label>
        <input class="form-control" id="usr-phone-input" value="${user.phone || ''}">
        <label for="usr-email-input">Email:</label>
        <input class="form-control" id="usr-email-input" value="${user.email || ''}">
        <label for="usr-dob-input">Ngày sinh:</label>
        <input type="date" class="form-control" id="usr-dob-input" value="${user.dob || ''}">
        <label for="usr-addr-input">Địa chỉ</label>
        <input class="form-control" id="usr-addr-input" value="${user.address || ''}">
        <label for="usr-nativeland-input">Quê quán:</label>
        <input class="form-control" id="usr-nativeland-input" value="${user.nativeland || ''}">
        <label for="usr-highschool-input">Trường cấp 3</label>
        <input class="form-control" id="usr-highschool-input" value="${user.highschool || ''}">
        <label for="usr-university-input">Trường đại học:</label>
        <input class="form-control" id="usr-university-input" value="${user.university || ''}">
        <label for="usr-corp-input">Công ty:</label>
        <input class="form-control" id="usr-corp-input" value="${user.corp || ''}">
        <button onclick="profileOnUpdate()" class="btn">Cập nhật</button>
    
    </div>
    `;
}

function groupHtm() {
    return `
    <div class="usr-group" >
        <div class="addmin-group" style="border-radius: 5px; background-color: white; padding:10px;">
            <header>Nhóm bạn quản lý</header>
            <hr style="border: solid grey 0.5px;">
            <div class="a-group">
                <p>Nhóm ACB</p>
            </div>
        </div>
        <div class="member-group" style="border-radius: 5px; background-color: white; padding: 10px;margin-top: 10px;">
            <header>Nhóm bạn tham gia</header>
            <hr style="border: solid grey 0.5px;">
            <div class="a-group">
                <p>Nhom df</p>
            </div>
            <div class="a-group">
                <p>Nhom cb</p>
            </div>
        </div>
    </div>
    `;
}

function aPostHtm() {
    return `
    <div class="well post-box rounded" style="background-color: white;">
        <div class="post-box-content rounded">
            <div class="well row" style="flex-wrap: nowrap !important; margin: 0 !important;">
                <img src="/images/user-icon.jpg" class="rounded-circle icon-user" alt="">

                <div class="col-md-6">
                    <p>Nguyen Dinh Minh</p>
                    <h6>20-02-2018</h6>
                </div>
            </div>

            <div class="well" style="margin-top: 10px;">
                <div>
                    <p>Day la anh</p>
                </div>
                <div>
                    <p>Day la noi dung</p>
                </div>
            </div>
            <hr>
            <div class="row">
                <button class="col-md-4 btn btn-post"><i class="glyphicon glyphicon-thumbs-up">Thích</i></button>
                <button class="col-md-4 btn btn-post">
                    <i class="glyphicon glyphicon-pencil">Bình luận</i>
                </button>
                <input type="hidden" value="true">
                <button class="col-md-4 btn btn-post">
                    <i class="glyphicon glyphicon-share">Chia sẻ</i>
                </button>
            </div>
        </div>
        <div class="post-box-comment">
            <div class="cmt-box"></div> <!-- Where show comments of the post -->
            <div id="hiddenCommentBox" class="row icon-cmt-box" style="display: none;">
                <img src="/images/user-icon.jpg" class="rounded-circle icon-user-small" alt="">
                <div class='hidden-div'>
                    <form class="comment-form">
                        <input class="input-comment" type="text" placeholder="Write comment ...">
                    </form>
                </div>
            </div>

        </div>
    </div>
    `
}

function supportsPageHtm(data) {
    return `
    <h4>Contact for supports: </h4>
    <p>Phone: ${data.phone || "No data"}</p>
    <p>Email: ${data.email || "No data"}</p>
    <p>Email: ${data.address || "No data"}</p>
    `;
}

function chatHtml() {
    return `
    
    <div>
        <div class="row chat-window " id="chat_window_1" style="margin-left:10px;">
            <div class="col-xs-12 col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading top-bar">
                        <div class="col-md-8 col-xs-8">
                            <h3 class="panel-title"><span class="glyphicon glyphicon-comment"></span> Chat - Miguel</h3>
                        </div>
                        <div class="col-md-4 col-xs-4" style="text-align: right;">
                            <a href="#"><span id="minim_chat_window" class="glyphicon glyphicon-minus icon_minim"></span></a>
                            <a href="#"><span class="glyphicon glyphicon-remove icon_close" data-id="chat_window_1"></span></a>
                        </div>
                    </div>
                    <div class="panel-body msg_container_base">
                        <div class="row msg_container base_sent">
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
                        </div>
                        <div class="row msg_container base_receive">
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
                        </div>
                        <div class="row msg_container base_receive">
                            <div class="avatar">
                                <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive ">
                            </div>
                            <div class="col-xs-10 col-md-10">
                                <div class="messages msg_receive">
                                    <p>that mongodb thing looks good, huh?
                                    tiny master db, and huge document store</p>
                                    <time datetime="2009-11-13T20:00">Timothy • 51 min</time>
                                </div>
                            </div>
                        </div>
                        <div class="row msg_container base_sent">
                            <div class="col-xs-10 col-md-10">
                                <div class="messages msg_sent">
                                    <p>that mongodb thing looks good, huh?
                                    tiny master db, and huge document store</p>
                                    <time datetime="2009-11-13T20:00">Timothy • 51 min</time>
                                </div>
                            </div>
                            <div class="avatar">
                                <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive ">
                            </div>
                        </div>
                    </div>
                    <div class="panel-footer">
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


function leftSideProfileHtm() {
    return ``;
}

function leftSidePostHtm() {
    return `
        <button class="btn" onclick="showCreatePostModal()">Tạo bài mới</button>
    `;
}

async function profileOnclick() {
    let rep = await $.get('/account');
    if (!rep) return error500();
    if (!rep.success) {
        return showReport(rep.msg);
    };

    let htm = userinfoHtm(rep.account);
    let leftHtm = leftSideProfileHtm();

    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);

    let leftside = $("#leftside");
    leftside.empty();
    leftside.append(leftHtm);
}

function groupOnclick() {
    let htm = groupHtm();
    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);
}

async function friendOnclick() {
    let rep = await $.get('/posts');
    if (!rep) return error500();
    if (!rep.success) return showReport(rep.msg);
    let htm = aPostHtm();
    htm += aPostHtm();
    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);
    let leftHtm = leftSidePostHtm();
    let leftSide = $("#leftside");
    leftSide.empty();
    leftSide.append(leftHtm);
}

async function gameOnclick() {
    let rep = await $.get('/account');
    if (!rep) return error500();
    if (!rep.success) {
        return showReport(rep.msg);
    };

    let htm = userinfoHtm(rep.account);
    let leftHtm = leftSideProfileHtm();

    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);

    let leftside = $("#leftside");
    leftside.empty();
    leftside.append(leftHtm);
}

async function messagesOnclick() {
    let rep = await $.get('/account');
    if (!rep) return error500();
    if (!rep.success) {
        return showReport(rep.msg);
    };

    let htm = userinfoHtm(rep.account);
    let leftHtm = leftSideProfileHtm();

    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);

    let leftside = $("#leftside");
    leftside.empty();
    leftside.append(leftHtm);
}

async function supportsOnclick() {
    let rep = await $.get('/supports');
    if (!rep) return error500();
    if (!rep.success) {
        return showReport(rep.msg);
    };
    
    let htm = supportsPageHtm(rep.supports);

    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);

    let leftside = $("#leftside");
    leftside.empty();
}

async function settingsOnclick() {
    let rep = await $.get('/account');
    if (!rep) return error500();
    if (!rep.success) {
        return showReport(rep.msg);
    };

    let htm = userinfoHtm(rep.account);
    let leftHtm = leftSideProfileHtm();

    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);

    let leftside = $("#leftside");
    leftside.empty();
    leftside.append(leftHtm);
}

async function worldOnclick() {
    let rep = await $.get('/account');
    if (!rep) return error500();
    if (!rep.success) {
        return showReport(rep.msg);
    };

    let htm = userinfoHtm(rep.account);
    let leftHtm = leftSideProfileHtm();

    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);

    let leftside = $("#leftside");
    leftside.empty();
    leftside.append(leftHtm);
}

async function profileOnUpdate() {
    let profileInfo = {
        name: $("#usr-name-input").val(),
        phone: $("#usr-phone-input").val(),
        email: $("#usr-email-input").val(),
        dob: $("#usr-dob-input").val(),
        address: $("#usr-addr-input").val(),
        nativeland: $("#usr-nativeland-input").val(),
        highschool: $("#usr-highschool-input").val(),
        university: $("#usr-university-input").val(),
        corp: $("#usr-corp-input").val(),

    }

    let rep = await $.post('/updateAccount', profileInfo);
    if (!rep) {
        error500();
    } else if (rep.success) {
        showReport("Cập nhật thông tin thành công");
    } else {
        showReport(rep.msg);
    }
}

function error500() {
    let htm = `
        <h1>Internal Server Error</h1>
    `;
    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);
}

function showReport(rp) {
    $('#report-content').text(rp);
    $('#reportmodal').modal('show');
    setTimeout(() => {
        $('#reportmodal').modal('hide');
    }, 1500);
}

function showCreatePostModal() {
    $('#postmodal').modal('show');
}

async function doPost() {
    let post = {
        text: $("#post-content").val(),
    }
    console.log(post);
    let rep = await $.post('/post', post);
    console.log(rep);
}

async function doLogin() {
    let account = {
        username: $("#usernamelogin").val(),
        pwd: $("#pwdlogin").val(),
    }

    let rep = await $.post("/login", account);
    if (!rep) {
        error500();
    } else if (rep.success) {
        loginSuccess();
    } else {
        loginFail(rep.msg);
    }

    function loginSuccess() {
        location.reload(true);
    }

    function loginFail(msg) {

        let showError = $('#loginerror');
        showError.text(msg);
    }
}
async function doSignin() {
    let account = {
        username: $("#usernamesignin").val(),
        pwd: $("#pwdsignin").val(),
        pwdrepeat: $("#pwdrepeatsignin").val(),
    }
    let rep = await $.post("/register", account);
    if (!rep) {
        error500();
    } else if (rep.success) {
        registerSuccess();
    } else {
        registerFail(rep.msg);
    }
    function registerSuccess() {
        location.reload(true);
    }

    function registerFail(msg) {
        let showError = $('#registererror');
        showError.text(msg);
    }
}

async function doLogout() {
    await $.get('/logout');
    location.reload(true);
    
}
function logSmt() {
    console.log("ok")
}

function autoComplete() {
    let typehead = $("#typehead");
    let dropdown = $("#typehead-dropdown");
    let typeheadVal = typehead.val();
    if (typeheadVal === "") {
        return showSearchHistory();
    }
    let htm = `
    <ul class="dropdown">
        <li class="search-element">${typeheadVal}abc</li>
        <li class="search-element">${typeheadVal} dact</li>
    </ul>
    `;
    dropdown.empty();
    dropdown.append(htm);
    dropdown.show();
}

function showSearchHistory() {
    let dropdown = $("#typehead-dropdown");
    let htm = `
    <ul class="dropdown">
        <li class="search-element">Nguyen Dinh Minh</li>
        <li class="search-element">ha noi</li>
        <li class="search-element">090 392 402</li>
    </ul>
    `;
    dropdown.empty();
    dropdown.append(htm);
    dropdown.show();
}

function hideDropdown() {
    $("#typehead-dropdown").empty();
    $("#typehead-dropdown").hide();
}

