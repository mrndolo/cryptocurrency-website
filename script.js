

var settings= {
    "async": true,
    "scrossDomain": true,
    "url": "",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function (response){
    console.log(response);
})