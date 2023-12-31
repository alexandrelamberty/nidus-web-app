import Headings from "../components/Headings";
import { getConfig } from "../config";
import { CapabilityGrid } from "../features/capability/CapabilityGrid";
import useCapabilityAPI from "../hooks/useCapabilityAPI";

export const Capabilities = () => {
  const { capabilities, loading, error } = useCapabilityAPI({
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
      <Headings title="Capabilities" />
      <CapabilityGrid capabilities={capabilities} />
    </div>
  );
};
