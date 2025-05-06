import React, { useContext, useState } from "react";
import { MEASUREMENT_SYSTEM } from "../../constants";
import WeatherContext from "@/context/weather.context";

const Settings = () => {
  const [openSettings, setOpenSettings] = useState(false);
  const { measurementSystem, setMeasurementSystem } =
    useContext(WeatherContext);

  const changeMeasurementSystem = (system) => {
    setMeasurementSystem(system);
    setOpenSettings(false);
  };

  return (
    <div className="relative flex items-center text-xl ml-4">
      <button
        onClick={() => setOpenSettings((prev) => !prev)}
        className="cursor-pointer"
      >
        <i className={`bi bi-gear${openSettings ? "-fill" : ""}`}></i>
      </button>

      {openSettings && (
        <div className="absolute top-12 right-0 z-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-60 text-sm transition-all duration-200">
          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Measurement System
          </h4>
          <div className="flex flex-wrap gap-2">
            {Object.values(MEASUREMENT_SYSTEM).map((system) => (
              <button
                key={system}
                onClick={() => changeMeasurementSystem(system)}
                className={`w-20 h-8 flex items-center justify-center rounded-md border 
                  ${
                    system === measurementSystem
                      ? "bg-blue-600 text-white border-blue-600"
                      : "border-gray-400 text-gray-700 dark:text-gray-300"
                  } hover:bg-blue-500 hover:text-white transition`}
              >
                {system}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
