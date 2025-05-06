import HourlyForecastWidget from "./HourlyForecastWidget";
import DailyForecastWidget from "./DailyForecastWidget";
import HorizontallyScrollable from "./HorizontallyScrollable";

function Forecast({ title, type, data }) {
  return (
    <div className="mt-8 select-none">
      <div className="">
        <h3 className="text-xl font-semibold">{title}</h3>
        <HorizontallyScrollable className="flex items-center overflow-x-auto mt-2 pt-6">
          {data.map((singleData, index) => (
            <div key={index}>
              {type === "hourly" ? (
                <HourlyForecastWidget data={singleData} />
              ) : (
                <DailyForecastWidget data={singleData} />
              )}
            </div>
          ))}
        </HorizontallyScrollable>
      </div>
    </div>
  );
}

export default Forecast;
