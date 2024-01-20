export enum Config {
  API_URL,
  MESSAGING_HOST,
  MESSAGING_PORT,
}

export const getConfig = (name: Config): string => {
  switch (name) {
    case Config.API_URL:
      return process.env.NODE_ENV === "production"
        ? "https://api.nidus.lan"
        : process.env.REACT_APP_API_URL!;
    case Config.MESSAGING_HOST:
      return process.env.REACT_APP_MESSAGING_HOST!;
    case Config.MESSAGING_PORT:
      return process.env.REACT_APP_MESSAGING_PORT!;
  }
};
