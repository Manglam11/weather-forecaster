import React from "react";
import WeatherIcon from "./WeatherIcon";

const HourlyForecastWidget = ({ data }) => {
  const { date, icon, summary, temperature, precipitation, wind } = data;

  const today_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date()),
    time: new Intl.DateTimeFormat(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date().setMinutes(0)),
  };

  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date(date)),
    time: new Intl.DateTimeFormat(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date).setMinutes(0)),
  };

  weather_date.day =
    weather_date.day === today_date.day && weather_date.time === today_date.time
      ? "Today"
      : weather_date.time === "00.00"
      ? weather_date.day
      : "";

  return (
    <div className="relative cursor-pointer flex flex-col items-center p-3 mr-3 min-w-[115px] border border-gray-400 rounded-xl">
      {weather_date.day && (
        <div className="absolute -top-6 text-sm text-gray-500">
          {weather_date.day}
        </div>
      )}
      <div className="text-sm">{weather_date.time}</div>

      <div className="flex flex-col items-center my-3">
        <div className="w-10 h-10">
          <WeatherIcon iconNumber={icon} summary={summary} />
        </div>
        <div className="text-lg font-medium mt-1">
          {Math.round(temperature)} °C
        </div>
      </div>

      <div className="text-sm text-blue-600">
        {Math.round(precipitation.total)} mm/h
      </div>

      <div className="flex items-center mt-1 text-sm">
        <div className="mr-1">{Math.round(wind.speed)} mph</div>
        <div
          className="ml-1 transform"
          style={{ transform: `rotate(${wind.angle - 45}deg)` }}
        >
          <i className="bi bi-send-fill"></i>
        </div>
      </div>
    </div>
  );
};

export default HourlyForecastWidget;
