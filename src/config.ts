export interface ExtendedWindow extends Window {
  _env_?: Environment | any;
}

export interface Environment {
  REACT_APP_API_URL?: string;
}

export const getConfig = (name: string): string | undefined => {
  const test: ExtendedWindow = window
  // If we are running with node we return .env file variable
  if (process.env.REACT_APP_ENV === "dev") {
    console.log("Config - dev")
    return process.env[name];
  } else {
    // If we are not running with node we used the `environment.sh` script to
    // inject variable from the hosting environment, ie Docker.
    console.log("Config - prod")
    return test._env_[name]
  }
  return ""
};
