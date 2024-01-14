import Headings from "../components/Headings";
import { ReadingWidgetProps } from "../features/dashboard/ReadingWidget";
import { WidgetGrid } from "../features/dashboard/WidgetGrid";

const widgets : ReadingWidgetProps[] = [
  {
    id: "564762545",
    name: "Living Room",
    initials: "GA",
    href: "#",
    value: 16,
    bgColor: "bg-pink-600",
  },
  {
    id: "564764225",
    name: "Kitchen",
    initials: "CD",
    href: "#",
    value: 3,
    bgColor: "bg-purple-600",
  },
  {
    id: "564764225",
    name: "Office",
    initials: "T",
    href: "#",
    value: 16,
    bgColor: "bg-yellow-500",
  },
  {
    id: "564732645",
    name: "Garage",
    initials: "RC",
    href: "#",
    value: 8,
    bgColor: "bg-green-500",
  },
  {
    id: "564766785645",
    name: "Shed",
    initials: "RC",
    href: "#",
    value: 8,
    bgColor: "bg-green-500",
  },
];

export const Dashboard = () => {
  return (
    <div className="flex-auto">
      <Headings title="Dashboard" />
      <WidgetGrid widgets={widgets} />
    </div>
  );
};
