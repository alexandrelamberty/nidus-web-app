import { Link } from "react-router-dom";

interface Menu {
  name: string;
  href: string;
}

interface VerticalManuProps {
  links: Menu[];
}
export const VerticalMenu = ({links} : VerticalManuProps) => {
  return (
    <ul className="space-y-2 text-sm">
      {links.map((menu) => (
        <Link
          className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline"
          to={menu.href}
        >
          {menu.name}
        </Link>
      ))}
    </ul>
  );
};
