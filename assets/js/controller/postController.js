async function friendOnclick() {
    let rep = await $.get('/posts');

    if (!rep) return error500();
    if (!rep.success) return showReport(rep.msg);
    let posts = rep.posts;
    
    renderPosts(posts);

    let leftHtm = leftSidePostHtm();
    let leftSide = $("#leftside");
    leftSide.empty();
    leftSide.append(leftHtm);
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

function renderPosts(posts) {
    let htm ="";
    posts.forEach(post => {
        htm += aPostHtm(post);
    })
    
    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);
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