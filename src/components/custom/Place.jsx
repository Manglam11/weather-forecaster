import WeatherContext from "@/context/weather.context";
import React, { useContext } from "react";
import { FaLocationDot } from "react-icons/fa6";
const Place = () => {
  const { place } = useContext(WeatherContext);
  return (
    <div className="flex justify-center items-center gap-1">
      <FaLocationDot />
      <b>{place.name}</b>, {place.country}
    </div>
  );
};

export default Place;
