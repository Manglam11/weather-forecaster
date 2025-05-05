import React from "react";
import.meta.env.BASE_URL;

const WeatherIcon = ({ iconNumber, alt }) => {
  return (
    <div>
      <img
        src={`${
          import.meta.env.BASE_URL
        }dist/weather_icons/set04/small/${iconNumber}.png`}
        alt={alt}
        className="w-12 object-contain"
        height="50px"
      />
    </div>
  );
};

export default WeatherIcon;
