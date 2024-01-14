export enum Config {
  API_URL,
}

export const getConfig = (name: Config): string => {
  switch (name) {
    case Config.API_URL:
      return process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_PROD_API_URL!
        : process.env.REACT_APP_DEV_API_URL!;
  }
};
