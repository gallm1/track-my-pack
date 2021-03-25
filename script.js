var upcoming = document.getElementById('matchUps');
var matchupsLi = document.getElementById('schedule')

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
        // console.log(response);
        showMatchup(response);
    });
}

showMatchup = function (data) {

    for (var i = 0; i < 5; i++) {

        matchup = document.createElement("h1");
        matchup.textContent = data.data[i].teams[0] + " vs " + data.data[i].teams[1];

        matchupsLi.appendChild(matchup);

        gameTime = document.createElement("h1");
        gameTime.textContent = data.data[i].commence_time;

        matchupsLi.appendChild(gameTime);
    }
}

upcoming.addEventListener("click", getLive);