import Headings from "../components/Headings";
import { ReadingWidgetProps } from "../features/dashboard/ReadingWidget";
import { WidgetGrid } from "../features/dashboard/WidgetGrid";

const widgets : ReadingWidgetProps[] = [
  {
    name: "Living Room",
    initials: "GA",
    href: "#",
    value: 16,
    bgColor: "bg-pink-600",
  },
  {
    name: "Kitchen",
    initials: "CD",
    href: "#",
    value: 12,
    bgColor: "bg-purple-600",
  },
  {
    name: "Office",
    initials: "T",
    href: "#",
    value: 16,
    bgColor: "bg-yellow-500",
  },
  {
    name: "Garage",
    initials: "RC",
    href: "#",
    value: 8,
    bgColor: "bg-green-500",
  },
  {
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
      <p>Build 1</p>
      {process.env.REACT_APP_ENV}
      <WidgetGrid widgets={widgets} />
    </div>
  );
};
