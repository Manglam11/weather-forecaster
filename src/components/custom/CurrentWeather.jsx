import React from "react";
import { getCurrentWeather } from "./api";
import.meta.env.BASE_URL;

const CurrentWeather = () => {
  const data = getCurrentWeather();

  const {
    cloud_cover,
    feels_like,
    humidity,
    icon_num,
    precipitation,
    summary,
    temperature,
    uv_index,
    visibility,
    wind,
  } = data;

  const otherInfoWidgets = [
    {
      id: 0,
      icon: "droplet",
      name: "Precipitation",
      value: Math.round(precipitation.total),
      unit: "in/h",
    },
    {
      id: 1,
      icon: "wind",
      name: "Wind",
      value: Math.round(wind.speed),
      unit: "mph",
    },
    {
      id: 2,
      icon: "moisture",
      name: "Humidity",
      value: Math.round(humidity),
      unit: "%",
    },
    {
      id: 3,
      icon: "sunglasses",
      name: "UV index",
      value: Math.round(uv_index),
      unit: "",
    },
    {
      id: 4,
      icon: "clouds-fill",
      name: "Clouds cover",
      value: Math.round(cloud_cover),
      unit: "%",
    },
    {
      id: 5,
      icon: "eye",
      name: "Visibility",
      value: Math.round(visibility),
      unit: "mi",
    },
  ];

  return (
    <div className=" p-5 flex flex-col md:flex-row">
      {/* Temperature Block */}
      <div className="bg-white text-black p-4 border border-[#65676b] rounded-xl w-[250px]">
        <div className="mb-2">
          <img
            src={`${
              import.meta.env.BASE_URL
            }dist/weather_icons/set04/small/${icon_num}.png`}
            alt={summary}
            className="w-12 object-contain"
            height="50px"
          />
        </div>
        <div className="mb-2">
          <div className="text-4xl font-semibold">{temperature} °C</div>
          <div className="text-base text-gray-600">
            feels_like {feels_like} °C
          </div>
        </div>
        <div className="mt-4 text-xl font-medium">{summary}</div>
      </div>

      {/* Other Infos */}
      <div className="flex-1 p-4 border border-[#65676b] rounded-xl md:ml-4 mt-4 md:mt-0 flex flex-wrap justify-center items-center">
        {otherInfoWidgets.map(({ id, name, icon, value, unit }) => (
          <div key={id} className="w-[182px] m-2">
            <div className="flex flex-col items-center p-2">
              <div className="flex items-center text-lg mb-2">
                <i className={`bi bi-${icon} mr-2`}></i>
                <span>
                  {value} {unit}
                </span>
              </div>
              <div className="text-sm text-gray-600">{name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentWeather;
