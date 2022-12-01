import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  FireIcon,
  HomeIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const user = {
  name: "Emily Selman",
  imageUrl:
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigationS = [
  { name: "Dashboard", icon: HomeIcon, href: "/", current: true },
  {
    name: "Devices",
    icon: FireIcon,
    href: "/devices",
    count: 3,
    current: false,
  },
  {
    name: "Capabilities",
    icon: InboxIcon,
    href: "/capabalities",
    count: 4,
    current: false,
  },
  { name: "Zones", icon: HomeIcon, href: "/zones", current: false },
  {
    name: "Measurements",
    icon: UserIcon,
    href: "/measurements",
    count: 12,
    current: false,
  },
  { name: "Settings", icon: InboxIcon, href: "/settings", current: false },
];

const navigation = [
  {
    name: "Inboxes",
    href: "#",
    children: [
      { name: "Technical Support", href: "#" },
      { name: "Sales", href: "#" },
      { name: "General", href: "#" },
    ],
  },
  { name: "Reporting", href: "#", children: [] },
  { name: "Settings", href: "#", children: [] },
];
const sidebarNavigation = [
  { name: "Open", href: "#", icon: InboxIcon, current: true },
  { name: "Archive", href: "#", icon: InboxIcon, current: false },
  { name: "Customers", href: "#", icon: InboxIcon, current: false },
  { name: "Flagged", href: "#", icon: InboxIcon, current: false },
  { name: "Spam", href: "#", icon: InboxIcon, current: false },
  { name: "Drafts", href: "#", icon: InboxIcon, current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Narrow sidebar*/}
      <nav
        aria-label="Sidebar"
        className="hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto"
      >
        <div className="relative w-20 flex flex-col p-3 space-y-3">
          {sidebarNavigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-400 hover:bg-gray-700",
                "flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg"
              )}
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
