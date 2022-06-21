async function getWeather(location){
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+ 
                                    location +"&appid=ea0124442c7e8a80a8100feb797f78b7", {mode: 'cors'});
    const data = await response.json();

    const name = data.name;
    const windSpeed = data.wind.speed;
    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    const humid = data.main.humidity;
    console.log(name, windSpeed, weatherDescription, temperature, humid)
    return {name, windSpeed, weatherDescription, temperature, humid}
}

export {getWeather}