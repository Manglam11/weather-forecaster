import currentWeather from "../api/current-weather.json";

function getCurrentWeather() {
  return currentWeather.current;
}

export { getCurrentWeather };
