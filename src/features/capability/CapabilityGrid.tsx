import { Capability } from "../../api/NidusAPIClient";
import CapabilityGridItem from "./CapabilityGridItem";
type CapabilityGridProps = {
  capabilities: Capability[];
};

export const CapabilityGrid = ({ capabilities }: CapabilityGridProps) => {
  return (
    <ul className="m-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {capabilities.map((capability) => (
        <CapabilityGridItem key={capability.id} {...capability} />
      ))}
    </ul>
  );
};
