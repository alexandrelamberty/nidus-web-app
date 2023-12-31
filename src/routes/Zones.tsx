import Headings from "../components/Headings";
import { getConfig } from "../config";
import { ZoneGrid } from "../features/zone/ZoneGrid";
import useZoneAPI from "../hooks/useZoneAPI";

export const Zones = () => {

  const { zones, loading, error } = useZoneAPI({
    baseURL: getConfig("REACT_APP_API_URL"),
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex-auto">
      <Headings title="Zones" />
      <ZoneGrid zones={zones} />
    </div>
  );
};
