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
var searchBtn = document.querySelector("#searchBtn");
var searchInput = document.querySelector("#searchInput");

var getUrl = function(){
    var apiUrl = "https://cors-anywhere.herokuapp.com/https://api.trackingmore.com/v2/trackings/china-post/RU123456789CN/en"
    fetch(apiUrl, {
        method: "GET",
        headers: {
        "Trackingmore-Api-Key": "b9053c74-221e-4e91-ac06-7a038c2833ad",
        "Content-Type": "application/json"
        }
    })
    .then(function (response) {
        response.json().then(function(data){
        console.log(data.data);
        });
    });
};

searchBtn.addEventListener("click", getUrl);



getNord();
