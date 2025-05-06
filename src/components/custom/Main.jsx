import React, { useContext } from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
// import { getHourlyForecast, getDeailyForecast } from "./api";
import WeatherContext from "@/context/weather.context";
import Loader from "./Loader";

const Main = () => {
  const { loading, currentWeather, dailyForecast, hourlyForecast } =
    useContext(WeatherContext);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <CurrentWeather data={currentWeather} />
          <Forecast
            type="hourly"
            title="HOURLY FORECAST"
            data={hourlyForecast}
          />
          <Forecast
            type="daily"
            title="21 DAYS FORECAST"
            data={dailyForecast}
          />
        </>
      )}
    </div>
  );
};

export default Main;
