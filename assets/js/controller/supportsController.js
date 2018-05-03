async function supportsOnclick() {
    let rep = await $.get('/supports');
    if (!rep) return error500();
    if (!rep.success) {
        return showReport(rep.msg);
    };
    
    let htm = supportsPageHtm(rep.supports);

    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);

    let leftHtm = leftSideSupportHtm();
    let leftside = $("#leftside");
    leftside.empty();
    leftside.append(leftHtm);
}