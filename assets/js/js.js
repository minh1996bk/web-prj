var hostData;

(async function() {
    let rep = await $.get('/account');
    if (!rep) return error500();
    if (!rep.success) {
        worldOnclick();
        return $("#loginmodal").modal('show');
    }
    hostData = rep.account;
    renderListFriend();
})();

$(document).ready(function() {
    io.socket.post('/online', {name: "minh"}, (res, jwres) => {
        //just ignore!!!
    })

    io.socket.on('sendMessage', renderIncomingMessage);
})

function renderIncomingMessage(data) {
    let inputCurrentTalk = $('#inputCurrentTalk');
    if (inputCurrentTalk.val() == data.talkId) {
        appendNewMessage(data, hostData.id);
    }
}

function appendNewMessage(data, hostId) {
    let htm = aMessageHtm(data, hostId);
    $('#messages-view').append(htm);
}

function error500() {
    let htm = `
        <h1>Internal Server Error</h1>
    `;
    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);
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
        name: $("#namesignin").val(),
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