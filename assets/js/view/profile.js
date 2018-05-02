


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

function leftSideProfileHtm(avatar) {
    return `
    <div class="avatar-profile">
        <img id="img_avatar" src="${avatar}" class="img-rounded " alt="Cinque Terre"> 
        <input type="button" id="get_file" value="Update" onclick="showSelectFile()">
        <input type="file" id="my_file" onchange="updateAvatar()">
    </div>
    <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action" onclick="showCreatePostModal()">Thông tin cá nhân</button>
        <button type="button" class="list-group-item list-group-item-action" onclick="showCreatePostModal()">Dòng thời gian</button>
        <button type="button" class="list-group-item list-group-item-action" onclick="showCreatePostModal()">Album ảnh</button>
        <button type="button" class="list-group-item list-group-item-action" onclick="showCreatePostModal()">Video</button>
    </div>
    `;
}