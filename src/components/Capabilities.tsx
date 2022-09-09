import React, { useEffect, useState } from "react";
import axios from "axios";
import { ExtendedWindow, getConfig } from "../config";

interface Capability {
  id: string;
  type: string;
  kind: string;
}

export const Capabilities = () => {
  const [capabilities, setCapabilities] = useState<Capability[]>([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(getConfig("REACT_APP_API_URL") + "/capabilities")
      .then(function (response) {
        console.log(response);
        setCapabilities(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
        setError(error.message);
      })
      .finally(() => setLoaded(true));
  }, []);

  return (
    <>
      <h3>Capabilities</h3>
      {capabilities?.map((capability) => (
        <li key={capability.id}>
          {capability.type} | {capability.kind}
        </li>
      ))}
    </>
  );
};
