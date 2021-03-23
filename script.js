var trackList = document.getElementById('searchInput');
var trackBtn = document.getElementById('searchBtn');




function getNord() {

    var apiKey = '2a54e289878ded53f01816a3fddaaa3e';
    var url = `https://api2.postnord.com/rest/shipment/v5/trackandtrace/findByIdentifier.json?apikey=${apiKey}&id=96932007555SE&locale=en&callback=<string>`;

    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        // // for (var i = 0; i < data.length; i++) {
        // //     var listItem = document.createElement('li');
        // //     listItem.textContent = data[i]
        // }
    });











}

getNord();
