// import { useContext } from "react";
// import WeatherContext from "../context/weather.context";

// function Place() {
//   const { place } = useContext(WeatherContext);

//   return (
//     <div className="Place">
//       <i className="bi bi-geo-alt-fill"></i> <b>{place.name}</b>,{" "}
//       {place.country}
//     </div>
//   );
// }

// export default Place;

import React from "react";
import { FaLocationDot } from "react-icons/fa6";
const Place = () => {
  return (
    <div className="flex justify-center items-center gap-1">
      <FaLocationDot />
      <b>Bhilai</b>, India
    </div>
  );
};

export default Place;
