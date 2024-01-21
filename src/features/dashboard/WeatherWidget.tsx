import { useEffect, useState } from "react";
import {
  FetchCurrentWeatherSuccess,
  FetchForecastWeatherSuccess,
  OpenWeatherApiClient,
} from "../../api/OpenWeatherAPIClient";
import { useDate } from "../../hooks/useDate";
import useCurrentWeatherAPI, {
  CurrentWeatherAPIHook,
} from "../../hooks/useCurrentWeatherAPI";
import useSettings from "../../hooks/useSettings";

const forecast = [
  {
    day: "Monday",
    min: "10",
    max: "18",
    icon: "https://openweathermap.org/img/wn/01d@2x.png",
    summary: "Clear sky",
  },
  {
    day: "Tuesday",
    min: "10",
    max: "18",
    icon: "https://openweathermap.org/img/wn/01d@2x.png",
    summary: "Clear sky",
  },
  {
    day: "Wednesday",
    min: "10",
    max: "18",
    icon: "https://openweathermap.org/img/wn/01d@2x.png",
    summary: "Clear sky",
  },
  {
    day: "Thursday",
    min: "10",
    max: "18",
    icon: "https://openweathermap.org/img/wn/01d@2x.png",
    summary: "Clear sky",
  },
  {
    day: "Friday",
    min: "10",
    max: "18",
    icon: "https://openweathermap.org/img/wn/01d@2x.png",
    summary: "Clear sky",
  },
  {
    day: "Saturday",
    min: "10",
    max: "18",
    icon: "https://openweathermap.org/img/wn/01d@2x.png",
    summary: "Clear sky",
  },
  {
    day: "Sunday",
    min: "10",
    max: "18",
    icon: "https://openweathermap.org/img/wn/01d@2x.png",
    summary: "Clear sky",
  },
];
type ForecastWeather = {
  day: string;
  min: string;
  max: string;
  icon: string;
  summary: string;
};

const ForecastWeatherWidget = () => {
  return (
    <div className="flex-2 px-4 py-2 text-sm">
      <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 md:grid-cols-7">
        {forecast.map((item: ForecastWeather) => (
          <div className="flex-1 px-4 py-2 text-sm border rounded-md bg-slate-200">
            <p className="text-gray-950">{item.day}</p>
            <p className="text-gray-500">
              {item.min} / {item.max} C
            </p>
            <p>{item.summary}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export const WeatherWidget = () => {
  const { weather_api_url, weather_api_key, city, metric, language } =
    useSettings();

  const { date, day, month, year, time } = useDate();

  const { weather, loading, error } = useCurrentWeatherAPI({
    baseURL: weather_api_url,
    appId: weather_api_key,
    city: city,
    units: metric,
    lang: language,
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex rounded-md border shadow-sm bg-slate-400 dark:bg-slate-600 border-slate-200 dark:border-slate-600">
      <div className="flex-1 px-4 py-2 text-sm ">
        <p className="text-gray-950 dark:text-foreground text-2xl">
          {day} {date.getDay()}, {month} {year}
        </p>
        <p className="text-gray-500 text-xl">{time}</p>
        <p className="text-gray-500">
          {weather?.main.temp_min} / {weather?.main.temp_min} C
        </p>
        <p>
          {weather?.name}, {weather?.sys.country}
        </p>
        <p>Wind speed:{weather?.wind.speed}</p>
        <p>Humidity: {weather?.main.humidity}%</p>
        <p>{weather?.weather[0].description}</p>
        <img
          src={
            "http://openweathermap.org/img/w/" +
            weather?.weather[0].icon +
            ".png"
          }
          alt="weather"
        />
      </div>
    </div>
  );
};
