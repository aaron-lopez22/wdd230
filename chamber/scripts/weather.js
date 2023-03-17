const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#wind-speed');


const url = `https://api.openweathermap.org/data/2.5/weather?id=5780993&units=imperial&appid=074535ef7ce608728f8425900995a4ce`;

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
         displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(weatherData) {
    const currentTemp = parseFloat(weatherData.main.temp.toFixed(0));
    const windSpeed = parseFloat(weatherData.wind.speed.toFixed(2));

    document.querySelector('#current-temp').innerHTML = `<strong>${currentTemp}</strong>`;
    document.querySelector('#wind-speed').innerHTML = `<strong>${windSpeed}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    
    
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;

  if (currentTemp <= 50.0 && windSpeed >=3.0) {
    const windChill = windChillFahr (currentTemp, windSpeed);
    document.querySelector('#wind-chill').innerHTML = windChill;
  } else {
    document.querySelector('#wind-chill').innerHTML = 'N/A';
  }
}

function windChillFahr(temp, windSpeed) {
    const windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(2);
  }