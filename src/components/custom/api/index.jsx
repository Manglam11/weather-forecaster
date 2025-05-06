import axios from "axios";

export async function getWeatherData(endpoint, place_id, measurementSystem) {
  const options = {
    method: "GET",
    url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
    params: {
      place_id,
      language: "en",
      units: measurementSystem,
    },
    headers: {
      "x-rapidapi-key": "8db82a0d87msha878e6aa18d28b0p110553jsn4a9f01bb07cc",
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
