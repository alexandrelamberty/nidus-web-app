import axios from "axios";
import { useEffect, useState } from "react";
import Headings from "../components/Headings";
import { Device } from "../features/device/Device";
import DeviceTable from "../features/device/DeviceTable";

export const Devices = () => {
  // Update / Scan for new device then show config windof for the devoce
  const [devices, setData] = useState<Device[]>([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3333/devices")
      .then(function (response) {
        console.log(response);
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
        setError(error.message);
      })
      .finally(() => setLoaded(true));
  }, []);

  return (
    <div className="flex-auto">
      <Headings title="Devices" />
      <DeviceTable devices={devices} />
    </div>
  );
};
