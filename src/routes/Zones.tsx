import axios from "axios";
import { useEffect, useState } from "react";
import Headings from "../components/Headings";
import { getConfig } from "../config";
import { Zone } from "../features/zone/Zone";
import { ZoneGrid } from "../features/zone/ZoneGrid";

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
    <div className="flex-auto">
      <Headings title="Zones" />
      <ZoneGrid zones={zones} />
    </div>
  );
};
