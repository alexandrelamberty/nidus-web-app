import { Link, useNavigate } from "react-router-dom";

const settingsMenu = [
  {
    name: "General",
    href: "/settings",
  },
  {
    name: "Security",
    href: "/settings/security",
  },
];

export const SettingsMenu = () => {
  const navigate = useNavigate();
  return (
    <div>
      {settingsMenu.map((menu) => (
        <Link to={menu.href}>{menu.name}</Link>
      ))}
    </div>
  );
};
