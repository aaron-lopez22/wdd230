var temperature = 36;
var windSpeed = 3;

var windChill = (35.74 + (0.6215 * temperature))-(35.75 * Math.pow(windSpeed, 0.16));

var windChill = Math.round(windChill);
document.getElementById('wind-chill').innerHTML = windChill;