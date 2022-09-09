import React, { useEffect, useState } from "react";
import axios from "axios";
import { ExtendedWindow, getConfig } from "../config";

interface Devices {
  id: string;
  name: string;
}

export const Devices = () => {
  const [data, setData] = useState<Devices[]>([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(getConfig("REACT_APP_API_URL") + "/devices")
      .then(function (response) {
        console.log(response);
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
        setError(error.message);
      })
      .finally(() => setLoaded(true));
  }, []);

  return (
    <>
      <h3>Devices</h3>
      {data?.map((device) => (
        <li key={device.id}>{device.name}</li>
      ))}
    </>
  );
};
