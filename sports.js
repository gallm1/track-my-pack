var searchBtn = document.querySelector("#searchBtn");
var searchInput = document.querySelector("#searchInput");
var resultsContainer = document.querySelector("#trackingResults");

var getUrl = function(){
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api-nba-v1.p.rapidapi.com/teams/city/"+searchInput.value+"",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7b783d5dd5msh630c54817ca02cdp12f512jsn8e82e1650168",
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
	}
};

$.ajax(settings).then(function (response) {
	console.log(response);
    showTeam(response);
})

}

var showTeam = function(data) {
    resultsContainer.textContent = ""

    teamLogo = document.createElement("img")
    teamLogo.setAttribute("src", data.api.teams[0].logo);

    resultsContainer.appendChild(teamLogo);

    teamConference = document.createElement("h2")
    teamConference.textContent = "Conference: " + data.api.teams[0].leagues.standard.confName;

    resultsContainer.appendChild(teamConference);

    teamDivision = document.createElement("h2")
    teamDivision.textContent = "Division: " + data.api.teams[0].leagues.standard.divName;

    resultsContainer.appendChild(teamDivision);

    teamFullname = document.createElement("h2")
    teamFullname.textContent = "Team Full Name: " + data.api.teams[0].fullName;

    resultsContainer.appendChild(teamFullname);

    teamNickname = document.createElement("h2")
    teamNickname.textContent = "Team Nickname: " + data.api.teams[0].nickname;

    resultsContainer.appendChild(teamNickname);
}

searchBtn.addEventListener("click", getUrl);






