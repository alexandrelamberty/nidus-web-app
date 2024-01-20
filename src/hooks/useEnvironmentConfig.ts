import { useEffect, useState } from "react";

export type EnvironmentConfig = {
    API_URL: string | undefined;
};

const useEnvironmentConfig = () : EnvironmentConfig => {
  const [API_URL, setAPI_URL] = useState<string | undefined>("");
  
  useEffect(() => {
    setAPI_URL(
       process.env.NODE_ENV === "production"
        ? "https://api.nidus.lan"
        : process.env.REACT_APP_API_URL
    );
  }, []);

  return { API_URL };
};

export default useEnvironmentConfig;
