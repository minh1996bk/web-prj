
function userinfoHtm() {
    return `
    <div id="profile-panel" class="modal-body form-group">

        <label for="usr-name-input">Họ và tên:</label>
        <input class="form-control" id="usr-name-input">
        <label for="usr-phone-input">Số điện thoại:</label>
        <input class="form-control" id="usr-phone-input">
        <label for="usr-email-input">Email:</label>
        <input class="form-control" id="usr-email-input">
        <label for="usr-dob-input">Ngày sinh:</label>
        <input type="date" class="form-control" id="usr-dob-input">
        <label for="usr-addr-input">Địa chỉ</label>
        <input class="form-control" id="usr-addr-input">
        <label for="usr-nativeland-input">Quê quán:</label>
        <input class="form-control" id="usr-nativeland-input">
        <label for="usr-highschool-input">Trường cấp 3</label>
        <input class="form-control" id="usr-highschool-input">
        <label for="usr-university-input">Trường đại học:</label>
        <input class="form-control" id="usr-university-input">
        <label for="usr-corp-input">Công ty:</label>
        <input class="form-control" id="usr-corp-input">
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

function leftSideProfileHtm() {
    return ``;
}

function profileOnclick() {
    
    let htm = userinfoHtm();
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

    function friendOnclick() {
    let htm = aPostHtm();
    htm += aPostHtm();
    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);
}


function profileOnUpdate() {
    let profileInfo = {
        name: $("#usr-name-input").val(),
        phone: $("#usr-phone-input").val(),
        email: $("#usr-email-input").val(),
        dob: $("#usr-dob-input").val(),
        addr: $("#usr-addr-input").val(),
        nativeland: $("#usr-nativeland-input").val(),
        highschool: $("#usr-highschool-input").val(),
        university: $("#usr-university-input").val(),
        corp: $("#usr-corp-input").val(),

    }
    console.log(profileInfo);

}

function error500() {
    let htm = `
        <h1>Internal Server Error</h1>
    `;
    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);
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