async function doUploadAndGetUrl(inputId) {
    var file_data = $(`#${inputId}`).prop('files')[0];
    if (!file_data) return "";
    var type = file_data.type;
   
    var form_data = new FormData();

    form_data.append('image', file_data);

    let rep = await $.ajax({
        url: 'uploadImage', 
        dataType: 'text',
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,                       
        type: 'post',
        
    });
   
    return 'images/' + JSON.parse(rep).imageUrl;
  
}