async function profileOnclick() {
    let rep = await $.get('/account');
    if (!rep) return error500();
    if (!rep.success) {
        return showReport(rep.msg);
    };

    renderMainProfile(rep.account);
    renderLeftSideProfile(rep.account.avatar);
    
}

async function showMyTimes() {
    let rep = await $.get('/mytimes');
    if (!rep) return error500();
    if (!rep.success) {
        return showReport(rep.msg);
    };
    
    renderPosts(rep.posts);
}

async function showImageAlbum() {
    let rep = await $.get('/getImageAlbum');
    if (!rep) return error500();
    if (!rep.success) {
        return showReport(rep.msg);
    };
    renderImageAlbum(rep.urls);
}

function renderImageAlbum(urls) {
    let htm = imageAlbumHtm(urls);
    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);
}

function renderMainProfile(account) {
    let htm = userinfoHtm(account);
    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);
}

function renderLeftSideProfile(avatar) {
    let leftHtm = leftSideProfileHtm(avatar);
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