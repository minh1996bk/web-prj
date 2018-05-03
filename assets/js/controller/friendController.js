renderListFriend();

async function renderListFriend() {
    let rep = await $.get('/friends');
    if (!rep) return error500();
    if (!rep.success) {
        return showReport(rep.msg);
    };

    let htm = listFriendHtm(rep.friends);

    
    let listFriendDiv = $('#list-friend');
    listFriendDiv.empty();
    listFriendDiv.append(htm);
}

async function addFriend(id) {
    let rep = await $.post('/addFriend', {
        friendId: id
    });
    let peopleModal = $('#peopleModal');
    peopleModal.modal('hide');
    if (!rep) return error500();
    if (!rep.success) {
        
        return showReport(rep.msg);
    };
    renderListFriend();
    return showReport(rep.msg);
    
}