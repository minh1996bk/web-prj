async function gameOnclick() {
    let rep = await $.get('/account');
    if (!rep) return error500();
    if (!rep.success) {
        return showReport(rep.msg);
    };

    let htm = userinfoHtm(rep.account);
    let leftHtm = leftSideProfileHtm();

    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);

    let leftside = $("#leftside");
    leftside.empty();
    leftside.append(leftHtm);
}