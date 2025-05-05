import React from "react";
import WeatherIcon from "./WeatherIcon";

const DailyForecastWidget = ({ data }) => {
  const {
    day,
    icon,
    summary,
    temperature_max,
    temperature_min,
    precipitation,
  } = data;

  const today_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date()),
  };

  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date(day)),
  };

  const displayDay =
    weather_date.day === today_date.day ? "Today" : weather_date.day;

  return (
    <div className="relative cursor-pointer flex flex-col items-center p-3 mr-3 min-w-[115px] border border-gray-400 rounded-xl">
      {weather_date.day && (
        <div className="absolute -top-6 text-sm text-gray-500">
          {displayDay}
        </div>
      )}

      <div className="flex flex-col items-center my-3">
        <div className="w-10 h-10">
          <WeatherIcon iconNumber={icon} summary={summary} />
        </div>
        <div className="text-lg font-medium mt-1 text-center">
          <div className="text-red-600">{Math.round(temperature_max)} °C</div>
          <div className="text-blue-600">{Math.round(temperature_min)} °C</div>
        </div>
      </div>

      <div className="text-sm text-blue-600">
        {Math.round(precipitation.total)} mm/h
      </div>
    </div>
  );
};

export default DailyForecastWidget;
