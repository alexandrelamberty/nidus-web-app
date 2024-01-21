import Headings from "../components/custom/Headings";
import { Config, getConfig } from "../config/Config";
import { CapabilityGrid } from "../features/capability/CapabilityGrid";
import useCapabilityAPI from "../hooks/useCapabilityAPI";

export const Capabilities = () => {
  const { capabilities, loading, error } = useCapabilityAPI({
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
      <Headings title="Capabilities" />
      <CapabilityGrid capabilities={capabilities} />
    </div>
  );
};
