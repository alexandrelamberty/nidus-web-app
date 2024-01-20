import { useEffect, useState } from "react";

export type Settings = {
  city: string;
  metric: string;
  language: string;
  weather_api_url: string;
  weather_api_key: string;
};

// TODO: refactor to async function calling the api to retrieve the settings from the database
const useSettings = (): Settings => {
  const [city, setCity] = useState<string>("Gentinnes, BE");
  const [metric, setMetric] = useState<string>("metric");
  const [language, setLanguage] = useState<string>("fr");
  const [weather_api_url, setWeather_api_url] = useState<string>(
    "https://api.openweathermap.org/data/2.5"
  );
  const [weather_api_key, setWeather_api_key] = useState<string>(
    "4018aa6666587fae9cdd20ef7e28942a"
  );

  return { city, metric, language, weather_api_url, weather_api_key };
};

export default useSettings;
