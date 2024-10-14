// Simulate fetching weather data using Promises
function fetchWeather(city) {
    return new Promise((resolve, reject) => {
        if (!city) {
            reject("City not provided");
        } else {
            setTimeout(() => {
                // Mock weather data
                const weatherData = {
                    city: city,
                    temperature: 25,
                    condition: "Cloudy"
                };
                resolve(weatherData);
            }, 2000);
        }
    });
}

// Fetch and log weather using async/await
async function getWeather(city) {
    try {
        const weather = await fetchWeather(city);
        console.log(`Weather in [${weather.city}]: [${weather.temperature}°C], [${weather.condition}]`);
    } catch (error) {
        console.error(error);
    }
}


getWeather("London");  // Fetch and log weather for London
getWeather("");        // Test error handling for empty city
