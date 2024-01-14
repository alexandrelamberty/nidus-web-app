import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";
import { Link } from "react-router-dom";

interface Menu {
  name: string;
  icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>
  >;
  href: string;
  current: boolean;
}

interface SidebarProps {
  links: Menu[];
  user: any;
}

export default function Sidebar({ links, user }: SidebarProps) {
  return (
    <>
      <div className="lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-20">
          <div className="flex-1 flex flex-col min-h-0 overflow-y-auto bg-indigo-600">
            <div className="flex-1">
              <div className="bg-indigo-700 py-4 flex items-center justify-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                  alt="Workflow"
                />
              </div>
              <nav
                aria-label="Sidebar"
                className="py-6 flex flex-col items-center space-y-3"
              >
                {links.map((item) => (
                  <Link
                    to={item.href}
                    key={item.name}
                    className="flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700"
                  >
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                    <span className="sr-only">{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
