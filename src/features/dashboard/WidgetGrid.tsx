import { AddItem } from "@/components/AddWidget";
import { ReadingWidget, ReadingWidgetProps } from "./ReadingWidget";

type WidgetGridProps = {
  widgets: ReadingWidgetProps[];
};

export const WidgetGrid = ({ widgets }: WidgetGridProps) => {
  return (
    <div>
      <ul className="m-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {widgets.map((widget) => (
          <ReadingWidget key={widget.id} {...widget} />
        ))}
        <AddItem label="Add Widget" />
      </ul>
    </div>
  );
};
