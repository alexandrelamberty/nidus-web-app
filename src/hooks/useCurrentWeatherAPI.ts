import { useEffect, useState } from "react";
import { Zone } from "../api/NidusAPIClient";
import {
  FetchCurrentWeatherSuccess,
  FetchForecastWeatherSuccess,
  OpenWeatherApiClient,
} from "../api/OpenWeatherAPIClient";

export interface CurrentWeatherAPIHook {
  weather?: FetchCurrentWeatherSuccess;
  loading: boolean;
  error: string | null;
}

interface UseCurrentWeatherAPIProps {
  baseURL: string;
  appId: string;
  city: string;
  units?: string;
  lang?: string;
}

/**
 * Return an CurrentWeatherAPIHook containing state variables and functions for interacting with the OpenWeather API for the current weather.
 *
 * @param {UseCurrentWeatherAPIProps} baseURL - The base URL for the API.
 * @return {CurrentWeatherAPIHook} An object containing the following properties:
 *   - `weather`: An objects.
 *   - `loading`: A boolean indicating whether the API is currently loading.
 *   - `error`: A string containing any error message from the API.
 */
const useCurrentWeatherAPI = ({
  baseURL,
  appId,
  city,
  units,
  lang,

}: UseCurrentWeatherAPIProps): CurrentWeatherAPIHook => {
  const [apiClient] = useState(
    new OpenWeatherApiClient(baseURL, appId, city, units, lang)
  );
  const [weather, setWeather] = useState<
    FetchCurrentWeatherSuccess | undefined
  >();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const fetchedWeather = await apiClient.getCurrentWeather();
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

export default useCurrentWeatherAPI;
