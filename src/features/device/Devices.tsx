import Headings from "../../components/Headings";
import { DeviceForm } from "./DeviceForm";
import DeviceTable from "./DeviceTable";

export const Devices = () => {
  // Update / Scan for new device then show config windof for the devoce
  return (
    <>
      <Headings />
      <div className="flex flex-row">
        <DeviceTable />
        <DeviceForm />
      </div>
    </>
  );
};
