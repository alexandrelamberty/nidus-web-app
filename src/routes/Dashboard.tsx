import Headings from "../components/custom/Headings";
import { WeatherWidget } from "@/features/dashboard/WeatherWidget";
import { ReadingWidgetProps } from "@/features/dashboard/ReadingWidget";
import { WidgetGrid } from "@/features/dashboard/WidgetGrid";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { Button } from "../ui/button";

const widgets: ReadingWidgetProps[] = [
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
      <WeatherWidget />
      <Button variant="secondary">Secondary</Button>
      <div className="flex gap-4"/>
      <WidgetGrid widgets={widgets} />
    </div>
  );
};
