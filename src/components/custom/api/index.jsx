import currentWeather from "../api/current-weather.json";
import dailyForecast from "../api/daily-forecast.json";
import hourlyForecast from "../api/hourly-forecast.json";

function getCurrentWeather() {
  return currentWeather.current;
}

function getDeailyForecast() {
  return dailyForecast.daily.data;
}
function getHourlyForecast() {
  return hourlyForecast.hourly.data;
}

export { getCurrentWeather, getDeailyForecast, getHourlyForecast };
