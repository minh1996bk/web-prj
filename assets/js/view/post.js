function aPostHtm(post) {
    return `
    <div class="well post-box rounded" style="background-color: white;">
        <div class="post-box-content rounded">
            <div class="well row" style="flex-wrap: nowrap !important; margin: 0 !important; padding: 1px;">
                <img src="https://kenh14cdn.com/2017/-1488451960776.jpg" class="col-md-2 rounded-circle icon-user" alt="">
                <div class="col-md-6">
                    <p onclick="showPeopleModal(${post.owner.id})" class='user-name'>${post.owner.name}</p>
                    <h6 style="margin-bottom: 0;">${renderTime(post.createdAt)}</h6>
                </div>
            </div>

            <div class="well" style="margin-top: 10px;">
                <div>
                    <p>Day la anh</p>
                </div>
                <div>
                    <p>${post.text}</p>
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

function leftSideWorldHtm() {
    return `
    <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action" onclick="showCreatePostModal()">Tạo bài đăng mới</button>
        <button type="button" class="list-group-item list-group-item-action" onclick="showCreatePostModal()">Người nổi tiếng</button>
        <button type="button" class="list-group-item list-group-item-action" onclick="showCreatePostModal()">Đã thích</button>
        <button type="button" class="list-group-item list-group-item-action" onclick="showCreatePostModal()">Đang bình luận</button>
    </div>
    `;
}

function leftSidePostHtm() {
    return `
    <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action" onclick="showCreatePostModal()">Tạo bài mới</button>
    </div>
    `;
}