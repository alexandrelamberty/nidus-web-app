import { AddItem } from "../../components/grid/AddItem";
import { Zone } from "./Zone";
import ZoneGridItem from "./ZoneGridItem";

type ZoneGridProps = {
    zones : Zone[]
}

export const ZoneGrid = ({zones} : ZoneGridProps) => {
  return (
    <ul className="m-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {zones.map((zone) => (
        <ZoneGridItem {...zone} />
      ))}
      <AddItem label="Add Zone"/>
    </ul>
  );
};
