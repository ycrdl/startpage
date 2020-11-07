let latitude = 48.683; 
let longitude = 6.200;
const apikey = '59ae97c48f0d4441bb54c66f3418d3c4';
let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;

const weather = {};

function getWeather(){
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function (data){
            console.log(data);

            weather.temperature = Math.floor(data.main.temp - 273.15);
            weather.description = data.weather[0].description;
            weather.icon = data.weather[0].id;
        })
        .then(function(){
            displayWeather();
        })
}

function displayWeather(){
    const content = document.getElementById('weather');
    var icon = icons[weather.icon].icon;
    var prefix = 'wi wi-';

    if (!(weather.icon > 699 && weather.icon < 800) && !(weather.icon > 899 && weather.icon < 1000)) {
        icon = 'day-' + icon;
    }

    icon = prefix + icon;
    
    content.innerHTML += "<i class=\"" + icon + "\"></i>"
        + ""
        + "<span>"
        + weather.temperature
        + "</span><span>°C </span><span>"
        + weather.description
        + "</span>";
}

getWeather();


