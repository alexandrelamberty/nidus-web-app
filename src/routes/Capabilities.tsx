import axios from "axios";
import { useEffect, useState } from "react";
import Headings from "../components/Headings";
import { getConfig } from "../config";
import { CapabilityGrid } from "../features/capability/CapabilityGrid";

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
    <div className="flex-auto">
      <Headings title="Capabilities" />
      <CapabilityGrid capabilities={capabilities} />
    </div>
  );
};
