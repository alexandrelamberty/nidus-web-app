import { Zone } from "../../api/NidusAPIClient";

type ZoneListProps = {
  zones: Zone[];
};

export const ZoneList = ({zones}: ZoneListProps) => {
  return (
    <>
      <h3>Zones</h3>
      {zones?.map((zone) => (
        <li key={zone.id}>{zone.name}</li>
      ))}
    </>
  );
};
