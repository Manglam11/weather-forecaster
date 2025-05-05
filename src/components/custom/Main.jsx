import React from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { getHourlyForecast, getDeailyForecast } from "./api";

const Main = () => {
  return (
    <div>
      <CurrentWeather />
      <Forecast
        type="hourly"
        title="HOURLY FORECAST"
        data={getHourlyForecast()}
      />
      <Forecast
        type="daily"
        title="21 DAYS FORECAST"
        data={getDeailyForecast()}
      />
    </div>
  );
};

export default Main;
