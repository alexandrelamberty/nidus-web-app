
import { useParams } from "react-router-dom";
import Headings from "../components/custom/Headings";
import { Config, getConfig } from "../config/Config";
import DeviceTable from "../features/device/DeviceTable";
import useDeviceAPI from "../hooks/useDeviceAPI";

export const Devices = () => {
  const { id } = useParams();
  const { devices, loading, error } = useDeviceAPI({
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
      <Headings title="Devices" />
      <DeviceTable devices={devices} />
    </div>
  );
};
