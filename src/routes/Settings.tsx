import { Outlet } from "react-router-dom";
import Headings from "../components/Headings";
import { VerticalMenu } from "../components/VerticalMenu";

const links = [
  {
    name: "General",
    href: "/settings",
  },
  {
    name: "Security",
    href: "/settings/security",
  },
];

export const Settings = () => {
  return (
    <div className="flex-auto">
      <Headings title="Settings" />
      <div className="flex gap-4">
        {/* Settings Menu */}
        <div className="flex-none p-4 ">
          <VerticalMenu links={links} />
        </div>
        {/* Settings section */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
