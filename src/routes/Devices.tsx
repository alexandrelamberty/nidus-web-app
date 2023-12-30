import Headings from "../components/Headings";
import DeviceTable from "../features/device/DeviceTable";

export const Devices = () => {
  // Update / Scan for new device then show config windof for the devoce
  return (
    <div className="flex-auto">
      <Headings title="Devices" />
      <DeviceTable />
    </div>
  );
};
