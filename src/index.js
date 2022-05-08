let now = new Date();
let date = now.getDate();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
let h3 = document.querySelector("h3");
h3.innerHTML = `${day} ${date} ${hours}:${minutes}`;

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperatureConvert").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchCity(event) {
  event.preventDefault();
  let apiKey = "c0603e8f3a85d5a92fb1120b28a278b4";
  let city = document.querySelector("#search-text-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

function celsiusTemperature(event) {
  celsius.innerHTML = "10℃";
}
function fahrenheitTemperature(event) {
  celsius.innerHTML = "40℉";
}
let celsius = document.querySelector("#celsius-link");
let fahrenheit = document.querySelector("#fahrenheit-link");
celsius.addEventListener("click", celsiusTemperature);
fahrenheit.addEventListener("click", fahrenheitTemperature);
