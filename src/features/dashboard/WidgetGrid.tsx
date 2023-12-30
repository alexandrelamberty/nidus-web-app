
import { AddItem } from "../../components/grid/AddItem";
import { ReadingWidget, ReadingWidgetProps } from "./ReadingWidget";

type WidgetGridProps = {
    widgets : ReadingWidgetProps[]
}

export const WidgetGrid = ({widgets} : WidgetGridProps) => {
  return (
    <ul className="m-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {widgets.map((widget) => (
        <ReadingWidget {...widget} />
      ))}
      <AddItem label="Add Widget" />
    </ul>
  );
};
