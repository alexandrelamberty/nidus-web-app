import Headings from "../components/Headings";
import { Config, getConfig } from "../config/Config";
import { ZoneGrid } from "../features/zone/ZoneGrid";
import useZoneAPI from "../hooks/useZoneAPI";

export const Zones = () => {
  //   const { setError } = useError();
  const { zones, loading, error } = useZoneAPI({
    baseURL: getConfig(Config.API_URL),
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
