import Img from "./imgs/bg-img.jpg"
import {cityName, description, temp, speed, humidity} from "./data.js"

document.body.style.backgroundImage = "url(" + Img + ")";

async function getWeather(location){
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+ 
                                    location +"&appid=ea0124442c7e8a80a8100feb797f78b7", {mode: 'cors'});
    const data = await response.json();

    const name = data.name;
    const windSpeed = data.wind.speed;
    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    const humid = data.main.humidity;
        
    results (name, windSpeed, weatherDescription, temperature, humid)
    console.log(name, windSpeed, weatherDescription, temperature, humid)
}


function results(n , ws, wd, t, h){
    cityName.textContent = n;
    description.textContent = wd;
    temp.textContent =  Math.round(t - 273) + "\u00B0 Celsius";
    speed.textContent = "Wind Speed: " + ws + "km/h";
    humidity.textContent = "Humidity: " +  h + "%";
}

const search = document.querySelector('#searchQueryInput');
const button = document.querySelector('#searchQuerySubmit');
button.addEventListener("click", ()=> {
    const dataset = getWeather(search.value);
    console.log(dataset);
    results(dataset);
} )


getWeather("Dubai");