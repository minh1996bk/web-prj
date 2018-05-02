
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

function leftSideGroupHtm() {
    return `
    <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action" onclick="showCreatePostModal()">Tạo nhóm mới</button>
        <button type="button" class="list-group-item list-group-item-action" onclick="showCreatePostModal()">Hội yêu động vật</button>
        <button type="button" class="list-group-item list-group-item-action" onclick="showCreatePostModal()">Hội blah blah</button>
    </div>
    `;
}