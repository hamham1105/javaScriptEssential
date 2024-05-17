function showweatherDetails(event){
    event.preventDefault();
    const city = document.getElementById('city').value ;
    const apiKey = "a7e46171c2c1b5500c2bbaef68144517"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p><b>Temperature:</b> ${data.main['temp']} &#8451;</p>
                                    <p><b>Weather:</b> ${data.weather[0]['description']}</p>`;
        })
        .catch(error => {
            console.error('Error fetching wather: ', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfor.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
    }

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
