
const cityName = document.querySelector('.name');
const description = document.querySelector('.description');
const temp = document.querySelector('.temperature');
const speed = document.querySelector('.speed');
const humidity = document.querySelector('.humidity');


async function getWeather(location){
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+ 
                                    location +"&appid=ea0124442c7e8a80a8100feb797f78b7", {mode: 'cors'});
    const data = await response.json();

    const name = data.name;
    const windSpeed = data.wind.speed;
    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
        
    results (name, windSpeed, weatherDescription, temperature, humidity)
}


function results(n , ws, wd, t, h){
    cityName.textContent = n;
    description.textContent = wd;
    temp.textContent =  Math.round(t - 273) + "\u00B0 Celsius";
    speed.textContent = "Wind Speed: " + ws + "km/h";
    humidity.textContent = "Humidity: " +  h + "%";
}

/*
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(coordinates);
}
else{
    console.log("error");
}

function coordinates(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;   
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ea0124442c7e8a80a8100feb797f78b7`)
    .then(function(response){
        console.log(response.json());
    });
}*/

const search = document.querySelector('#searchQueryInput');
const button = document.querySelector('#searchQuerySubmit');
button.addEventListener("click", ()=> {
    const dataset = getWeather(search.value);
    console.log(dataset);
    results(dataset);
} )


getWeather("Dubai");