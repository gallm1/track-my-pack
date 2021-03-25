var searchList = document.getElementById('searchInput');
var searchBtn = document.getElementById('searchBtn');
var matchupsLi = document.getElementById('trackingResults')

function getLive() {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://odds.p.rapidapi.com/v1/odds?sport=basketball_nba&region=us&mkt=h2h&dateFormat=iso&oddsFormat=american",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "491edb598amshabeb5390dd1fc82p1c8e26jsn8351a101f963",
            "x-rapidapi-host": "odds.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });

    var matchup = response.data[i].teams
    var gameTime = response.data[i].commence_time
}

getLive();



searchBtn.addEventListener("click", getLive);
