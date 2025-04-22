// Get user's location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Lat: ${latitude}, Long: ${longitude}`);
        getWeather(latitude, longitude); // Call weather function
    }, error => {
        console.error("Error getting location:", error);
        alert("Unable to get your location.");
    });
} else {
    alert("Geolocation is not supported by your browser.");
}

// Fetch weather data
function getWeather(lat, lon) {
    const apiKey = "62d01bf13d768cbb02da9a1b4eec72d2";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = data.weather[0].description;
            const temperature = data.main.temp;
            document.querySelector('.weather').innerHTML =
                `Current Weather: ${weather}, ${temperature}°C`;
        })
        .catch(error => console.error("Error fetching weather:", error));
}
