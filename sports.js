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

window.onload = function() {
    save();
}

function save() {
    var input = document.querySelector("#searchInput");
    var output = document.querySelector("#saveArea");
    var saveBtn = document.querySelector("#saveBtn");

    saveBtn.addEventListener("click", setSave);

    output.textContent = localStorage.getItem("content");
    input.value = localStorage.getItem("content");

    console.log(input.value);

    function setSave() {
        localStorage.setItem("content", input.value);
        output.textContent = input.value;

        console.log(output.textContent);
    }
}

searchBtn.addEventListener("click", getUrl);






