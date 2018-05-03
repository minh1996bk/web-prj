function groupOnclick() {
    let htm = groupHtm();
    let mainView = $("#view-screen");
    mainView.empty();
    mainView.append(htm);

    let leftHtm = leftSideGroupHtm();
    let leftside = $("#leftside");
    leftside.empty();
    leftside.append(leftHtm);
}