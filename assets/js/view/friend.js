function userFindHtm(users) {
    let htm =  `<ul class='dropdown'>`;
    users.forEach(user => {
        htm += `<li class="search-element" onclick="showPeopleModal(${user.id})">${user.name}</li>`;
    })
    htm +=  `</ul>`
    return htm;
                
         
}