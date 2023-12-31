
import Headings from "../components/Headings";
import { getConfig } from "../config";
import DeviceTable from "../features/device/DeviceTable";
import useDeviceAPI from "../hooks/useDeviceAPI";

export const Devices = () => {
  const { devices, loading, error } = useDeviceAPI({
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
      <Headings title="Devices" />
      <DeviceTable devices={devices} />
    </div>
  );
};
