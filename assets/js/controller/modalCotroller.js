async function showPeopleModal(id) {
    let rep = await $.get(`/user/${id}`);
    if (!rep) return error500();
    if (!rep.success) return showReport(rep.msg);
    let modal = peopleModalHtm(rep.talkId, rep.user, rep.isSelf, rep.isFriend);
    let peopleModal = $('#peopleModal');
    peopleModal.empty();
    peopleModal.append(modal);
    peopleModal.modal("show");
    $("#typehead-dropdown").empty();
    $("#typehead-dropdown").hide();
}

function showCreateGroupModal() {
    let modal = createGroupModal();
    let peopleModal = $('#peopleModal');
    peopleModal.empty();
    peopleModal.append(modal);
    peopleModal.modal("show");
    $("#typehead-dropdown").empty();
    $("#typehead-dropdown").hide();
}

function showCreatePostModal() {
    $('#postmodal').modal('show');
}

function hideCreatePostModal() {
    $('#postmodal').modal('hide');
}