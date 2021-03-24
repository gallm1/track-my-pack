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