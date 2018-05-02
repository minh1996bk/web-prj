function supportsPageHtm(data) {
    return `
    <h4>Contact for supports: </h4>
    <p>Phone: ${data.phone || "No data"}</p>
    <p>Email: ${data.email || "No data"}</p>
    <p>Email: ${data.address || "No data"}</p>
    `;
}

function leftSideSupportHtm() {
    return `
    <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action" onclick="showCreatePostModal()">Chính sách</button>
        <button type="button" class="list-group-item list-group-item-action" onclick="showCreatePostModal()">Thông tin liên hệ</button>
    </div>
    `;
}