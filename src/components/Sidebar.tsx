import { Cog6ToothIcon, HomeIcon, LinkIcon } from "@heroicons/react/24/outline";
import { CodeBracketIcon, Squares2X2Icon } from "@heroicons/react/24/solid";

const user = {
  name: "Emily Selman",
  imageUrl:
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigationS = [
  { name: "Dashboard", icon: Squares2X2Icon, href: "/", current: true },
  {
    name: "Zones",
    icon: HomeIcon,
    href: "/zones",
    current: false,
  },
  {
    name: "Devices",
    icon: LinkIcon,
    href: "/devices",
    count: 3,
    current: false,
  },
  {
    name: "Capabilities",
    icon: CodeBracketIcon,
    href: "/capabilities",
    count: 4,
    current: false,
  },
  {
    name: "Settings",
    icon: Cog6ToothIcon,
    href: "/settings",
    current: false,
  },
];


export default function Sidebar() {
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
                {navigationS.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700"
                  >
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                    <span className="sr-only">{item.name}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
