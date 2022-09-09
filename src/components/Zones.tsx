import React, { useEffect, useState } from "react";
import axios from "axios";
import { ExtendedWindow, getConfig } from "../config";

interface Zone {
  id: string;
  name: string;
}

export const Zones = () => {
  const [zones, setZones] = useState<Zone[]>([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(getConfig("REACT_APP_API_URL") + "/zones")
      .then(function (response) {
        console.log(response);
        setZones(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
        setError(error.message);
      })
      .finally(() => setLoaded(true));
  }, []);

  return (
    <>
      <h3>Zones</h3>
      {zones?.map((zone) => (
        <li key={zone.id}>{zone.name}</li>
      ))}
    </>
  );
};
