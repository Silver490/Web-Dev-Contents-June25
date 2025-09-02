let APIKey = '020e1b958e9156cd1a7447199a044ef2'
// let latLonUrl = (city, APIKey)=>{`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIKey}`}
// let weatherUrl = (lat, lon, APIKey)=>{`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`}


// async function getWeather(city){
//     let data = await axios.get(latLonUrl(city, APIKey))
//     console.log(data);
//     let lat = data.data[0].lat
//     let lon = data.data[0].lon
    

//     let weatherData = await axios.get(weatherUrl(lat, lon, APIKey))
//     console.log(weatherData);
// }



// getWeather('delhi')
// // getLatLon('delhi',APIKey)


// let APIKey = '68eb9a82e650df54c98feebbf88e20d7'
let getWeatherUrl = (lat, lon, APIKey) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`
let getLatAndLonUrl = (APIKey, city, limit = 1) => `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${APIKey}`
let btn = document.querySelector('button');
let cityName = document.querySelector('input');

async function getWeather(city) {
    let { data } = await axios.get(getLatAndLonUrl(APIKey, city));
    const { lat, lon } = data[0];

    let weatherData = await axios.get(getWeatherUrl(lat, lon, APIKey));
    weatherData = weatherData.data
    return weatherData;
}

// getWeather('delhi');
btn.addEventListener('click', async () => {
    if (cityName.value.trim() == 0) return;

    let data = await getWeather(cityName.value);
    console.log("FETCHED", data);

});