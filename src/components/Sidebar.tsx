import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
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

const navigation = [
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

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  return (
    <>
      <div className="flex-1 flex flex-col min-h-0 bg-gray-800 md:max-w-xs">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto w-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
              alt="Workflow"
            />
          </div>
          <nav
            className="mt-5 flex-1 px-2 bg-gray-800 space-y-1"
            aria-label="Sidebar"
          >
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                )}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? "text-gray-300"
                      : "text-gray-400 group-hover:text-gray-300",
                    "mr-3 flex-shrink-0 h-6 w-6"
                  )}
                  aria-hidden="true"
                />
                <span className="flex-1">{item.name}</span>
                {item.count ? (
                  <span
                    className={classNames(
                      item.current
                        ? "bg-gray-800"
                        : "bg-gray-900 group-hover:bg-gray-800",
                      "ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"
                    )}
                  >
                    {item.count}
                  </span>
                ) : null}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex-shrink-0 flex bg-gray-700 p-4">
          <a href="#" className="flex-shrink-0 w-full group block">
            <div className="flex items-center">
              <div>
                <img
                  className="inline-block h-9 w-9 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">Tom Cook</p>
                <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">
                  View profile
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
