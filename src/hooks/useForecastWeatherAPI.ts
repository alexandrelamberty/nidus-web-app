import { useEffect, useState } from "react";
import {
  FetchForecastWeatherSuccess,
  OpenWeatherApiClient,
} from "../api/OpenWeatherAPIClient";

interface ForecastWeatherAPIHook {
  weather?: FetchForecastWeatherSuccess;
  loading: boolean;
  error: string | null;
}

interface UseForecastWeatherAPIProps {
  baseURL: string;
  appId: string;
  city: string;
  units?: string;
  lang?: string;
}

/**
 * Return an ForecastWeatherAPIHook containing state variables and functions for interacting with the OpenWeather API for forecast.
 *
 * @param {UseForecastWeatherAPIProps} baseURL - The base URL for the API.
 * @return {ForecastWeatherAPIHook} An object containing the following properties:
 *   - `weather`: An objects.
 *   - `loading`: A boolean indicating whether the API is currently loading.
 *   - `error`: A string containing any error message from the API.
 */
const useForecastWeatherAPI = ({
  baseURL,
  appId,
  city,
  units,
  lang,
}: UseForecastWeatherAPIProps): ForecastWeatherAPIHook => {
  const [apiClient] = useState(
    new OpenWeatherApiClient(baseURL, appId, "Gentinnes, BE", "metric", "fr")
  );
  const [weather, setWeather] = useState<
    FetchForecastWeatherSuccess | undefined
  >();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const fetchedWeather = await apiClient.getForecastWeather();
        setWeather(fetchedWeather);
        setError(null);
      } catch (error: any) {
        setError(error.message || "Error fetching weather");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();

    const intervalId = setInterval(fetchWeather, 10 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [apiClient]);

  return {
    weather,
    loading,
    error,
  };
};

export default useForecastWeatherAPI;
