import { Outlet } from "react-router-dom";
import Headings from "../components/Headings";
import { SettingsMenu } from "../features/settings/SettingsMenu";

export const Settings = () => {
  return (
    <div className="flex-auto">
      <Headings title="Settings" />
      <div className="flex">
        <div className="flex-none ">
          <SettingsMenu />
        </div>
        <div className="flex-1">
   
          <Outlet />
        </div>
      </div>
    </div>
  );
};
