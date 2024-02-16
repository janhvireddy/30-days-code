const apiKey = "2844f620f971bc75fd0da89307463397";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const input = document.getElementById("txtBox");
const btn = document.getElementById("searchbtn");
const weatherIcon = document.getElementById("weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    //diff b/w querySelectorr and getElementById
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + "kmph";
    if (data.weather[0].main === "Clouds") {
      weatherIcon.src =
        "https://cdn-icons-png.flaticon.com/512/1146/1146795.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src =
        "https://as2.ftcdn.net/v2/jpg/05/27/62/63/1000_F_527626344_4Kd6PgkGUGa3XEaC7Hmu2OWuogp1OQRO.jpg";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "https://i.pngimg.me/thumb/f/720/m2H7H7A0Z5K9b1N4.jpg";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Weather-sun-clouds-rain.svg/2048px-Weather-sun-clouds-rain.svg.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src =
        "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

//difference between <btn onclick="function()"></btn> & btn.addEventListener("click",function(){})
btn.addEventListener("click", () => {
  checkWeather(input.value);
});
