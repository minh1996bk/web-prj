async function profileOnclick() {
    let rep = await $.get('/account');
    if (!rep) return error500();
    if (!rep.success) {
        return showReport(rep.msg);
    };

    let htm = userinfoHtm(rep.account);
  
    let leftHtm = leftSideProfileHtm(rep.account.avatar);

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

    let leftHtm = leftSideGroupHtm();
    let leftside = $("#leftside");
    leftside.empty();
    leftside.append(leftHtm);
}

async function friendOnclick() {
    let rep = await $.get('/posts');

    if (!rep) return error500();
    if (!rep.success) return showReport(rep.msg);
    let posts = rep.posts;
    let htm ="";
    posts.forEach(post => {
        htm += aPostHtm(post);
    })
    
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
    let rep = await $.get('/talks');
    if (!rep) return error500();
    if (!rep.success) {
        return showReport(rep.msg);
    };


    let leftHtm = leftSideMessageHtm(rep.talks);

    // let mainView = $("#view-screen");
    // mainView.empty();
    // mainView.append(htm);

    let leftside = $("#leftside");
    leftside.empty();
    leftside.append(leftHtm);
}

async function getTalk(id) {
    let rep = await $.get('/talk');
    if (!rep) return error500();
    if (!rep.success) {
        return showReport(rep.msg);
    };

    let htm = chatHtml(rep.talk.messages, rep.host);
    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);
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

    let leftHtm = leftSideSupportHtm();
    let leftside = $("#leftside");
    leftside.empty();
    leftside.append(leftHtm);
}

async function settingsOnclick() {
    let rep = await $.get('/account');
    if (!rep) return error500();
    if (!rep.success) {
        return showReport(rep.msg);
    };

    let htm = changePasswordHtm();
    let leftHtm = leftSideSettingHtm();

    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);

    let leftside = $("#leftside");
    leftside.empty();
    leftside.append(leftHtm);
}

async function worldOnclick() {
    let rep = await $.get('/publicPosts');

    if (!rep) return error500();
    if (!rep.success) return showReport(rep.msg);
    let posts = rep.posts;
    let htm ="";
    posts.forEach(post => {
        htm += aPostHtm(post);
    })
    
    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);
    let leftHtm = leftSidePostHtm();
    let leftSide = $("#leftside");
    leftSide.empty();
    leftSide.append(leftHtm);
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



function showCreatePostModal() {
    $('#postmodal').modal('show');
}

function hideCreatePostModal() {
    $('#postmodal').modal('hide');
}

async function doPost() {
    let url = await doUploadAndGetUrl('post-img');
    let post = {
        text: $("#post-content").val(),
        img: url,
    }
    
    let rep = await $.post('/post', post);
    if (!rep) return error500();
    if (rep.success) {
        hideCreatePostModal();
    }
    showReport(rep.msg);
    friendOnclick();

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
        return;
        // return showSearchHistory();
    }
    // to get data from where search
    io.socket.get('/findUser',{
        searchPattern: typeheadVal,
    }, (body, jw) => {
        console.log(body);
  
    })
    io.socket.on('findUser', users => {
        let htm = userFindHtm(users);
        dropdown.empty();
        dropdown.append(htm);
        dropdown.show();
    })
    
    
}

function showSearchHistory() {
    //to do get user saved in cookies or somewhere
    let users = [
        {
            id: 1,
            name: 'Nguyen Dinh Minh',
            avatar: 'user-icon.jpg',
        },
        {
            id: 2,
            name: `saf asfaf`,
            avatar: 'user-icon.jpg',
        }
    ]

    let dropdown = $("#typehead-dropdown");

    let htm = userFindHtm(users);

    dropdown.empty();
    dropdown.append(htm);
    dropdown.show();
}



async function showPeopleModal(id) {
    let rep = await $.get(`/user/${id}`);
    if (!rep) return error500();
    if (!rep.success) return showReport(rep.msg);
    let modal = peopleModalHtm(rep.user, rep.isSelf, rep.isFriend);
    let peopleModal = $('#peopleModal');
    peopleModal.empty();
    peopleModal.append(modal);
    peopleModal.modal("show");
    $("#typehead-dropdown").empty();
    $("#typehead-dropdown").hide();
}

function showCreateGroupModal() {
    let modal = createGroupModal();
    let peopleModal = $('#peopleModal');
    peopleModal.empty();
    peopleModal.append(modal);
    peopleModal.modal("show");
    $("#typehead-dropdown").empty();
    $("#typehead-dropdown").hide();
}

function hideDropdown() {
    $("#typehead-dropdown").empty();
    $("#typehead-dropdown").hide();
}

function renderTime(ms) {
  
    let _ms = parseInt(ms);

    let time = new Date().getTime() - _ms;
    if (time < (60 * 60 * 1000)) return Math.round(time / (60 * 1000)) + " phút trước";
   
    else if (time < (60 * 60 * 1000)) return Math.round(time / (24 * 60 * 60 * 1000)) + " giờ trước";
    else {
        return new Date(time).toLocaleString();
    }
}

function deleteFriend() {
    
}

function showSelectFile() {
    document.getElementById('my_file').click();
};

async function updateAvatar() {
    let url = await doUploadAndGetUrl('my_file');
    let rep = await $.post('/updateAccount', {
        avatar: url
    });
    if (!rep) {
        error500();
    } else if (rep.success) {
        showReport("Cập nhật thông tin thành công");
    } else {
        showReport(rep.msg);
    }
}
function showChangePassword() {
    htm = changePasswordHtm();

    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);
};

function showDeactive() {
    htm = deactiveHtm();

    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);
}