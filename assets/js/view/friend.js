function userFindHtm(users) {
    let htm =  `<ul class='dropdown'>`;
    users.forEach(user => {
        htm += `<li class="search-element" onclick="showPeopleModal(${user.id})">${user.name}</li>`;
    })
    htm +=  `</ul>`
    return htm;
                
         
}

function listFriendHtm(friends) {

    let htm = "";
    friends.forEach(fr => {
        htm += `<button onclick="showPeopleModal(${fr.id})" type="button" class="list-group-item list-group-item-action">${fr.name}</button>`;
    }) 

    return htm;
}

