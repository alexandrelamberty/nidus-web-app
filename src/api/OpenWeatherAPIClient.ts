import axios, { AxiosRequestConfig } from "axios";

export interface CurrentWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface ForecastWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface FetchCurrentWeatherSuccess {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  name: string;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: CurrentWeather[];
  wind: {
    speed: number;
    deg: number;
  };
}

export interface FetchForecastWeatherSuccess {
  list: [
    {
      dt: number;
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
      };
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
      clouds: {
        all: number;
      };
      wind: {
        speed: number;
        deg: number;
        gust: number;
      };
      visibility: number;
      pop: number;
      rain: {
        "3h": number;
      };
      sys: {
        pod: string;
      };
      dt_txt: string;
    }
  ];
  city: {
    name: string;
    coord: {
      lon: number;
      lat: number;
    };
    country: string;
    timezone: number;
  };
}

export class OpenWeatherApiClient {
  private baseURL: string;
  private appId: string;
  private city: string;
  private units?: string;
  private lang?: string;

  constructor(baseURL: string, appId: string, city: string, units?: string, lang?: string) {
    this.baseURL = baseURL;
    this.appId = appId;
    this.city = city;
    this.units = units;
    this.lang = lang;
  } 

  private async request<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response = await axios({
        ...config,
        params: {
          ...config.params,
          appid: this.appId,
          q: this.city,
          units: this.units,
          lang: this.lang,
        },
      });
      return response.data;
    } catch (error: any) {
      throw error.response?.data || error.message;
    }
  }

  public async getCurrentWeather(): Promise<FetchCurrentWeatherSuccess> {
    return this.request({
      method: "get",
      url: `${this.baseURL}/weather`,
    });
  }

  public async getForecastWeather(): Promise<FetchForecastWeatherSuccess> {
    return this.request({
      method: "get",
      url: `${this.baseURL}/forecast`,
    });
  }
}
