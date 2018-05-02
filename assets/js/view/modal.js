function peopleModalHtm(user, isSelf, isFriend) {
    let htm = isSelf ? `` : isFriend ? 
        `<button type="button" class="btn" onclick="deleteFriend(${user.id})">Hủy kết bạn</button>` : 
        `<button type="button" class="btn" onclick="addFriend(${user.id})">Kết bạn</button>`;
    
    return `
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Trang cá nhân<h4>
                
            </div>
            <div class="modal-body form-group">
                <img src="https://kenh14cdn.com/2017/-1488451960776.jpg" class="img-rounded avatar-modal" alt="Cinque Terre">
                <h2 class="name-modal">${user.name}</h2>
            </div>
            <div class="modal-footer">
                ${htm}
            </div>
        </div>
    </div>
    
    `
}

function showReport(rp) {
    $('#report-content').text(rp);
    $('#reportmodal').modal('show');
    setTimeout(() => {
        $('#reportmodal').modal('hide');
    }, 1500);
}
