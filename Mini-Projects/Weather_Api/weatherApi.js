// APIKey is now loaded from config.js. Make sure to include config.js before this script in your HTML.

let getWeatherUrl = (lat, lon, APIKey) =>
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`;
let getLatAndLonUrl = (APIKey, city, limit = 1) =>
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${APIKey}`;
let btn = document.querySelector("button");
let cityName = document.querySelector("input");

async function getWeather(city) {
    let { data } = await axios.get(getLatAndLonUrl(APIKey, city));
    const { lat, lon } = data[0];

    let weatherData = await axios.get(getWeatherUrl(lat, lon, APIKey));
    weatherData = weatherData.data;
    return weatherData;
}

// Show weather for a default city on page load
window.addEventListener("DOMContentLoaded", async () => {
    try {
        let data = await getWeather("Delhi");
        updateWeather(data);
    } catch (e) {
        console.error("Failed to fetch default city weather:", e);
    }
});

btn.addEventListener("click", async () => {
    if (cityName.value.trim() == 0) {
        alert("Please enter a city name");
        return;
    }
    let data = await getWeather(cityName.value);
    updateWeather(data);
    console.log("FETCHED", data);
    cityName.value = "";
});

// update the dom
function updateWeather(data) {
    let city = document.querySelector(".city");
    let country = document.querySelector(".country");
    let temp = document.querySelector(".temp");
    let desc = document.querySelector(".desc");
    let icon = document.querySelector(".icon");
    let humidity = document.querySelector(".humidity");
    let wind = document.querySelector(".wind");
    let pressure = document.querySelector(".pressure");
    let visibility = document.querySelector(".visibility");

    city.innerText = data.name;
    country.innerText = data.sys.country;
    temp.innerText = (data.main.temp - 273.15).toFixed(2) + " °C";
    desc.innerText = data.weather[0].description;
    icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    humidity.innerText = `Humidity: ${data.main.humidity} %`;
    wind.innerText = `Wind Speed: ${data.wind.speed} m/s`;
    pressure.innerText = `Pressure: ${data.main.pressure} hPa`;
    visibility.innerText = `Visibility: ${data.visibility / 1000} km`;
}
