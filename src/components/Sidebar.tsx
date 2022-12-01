import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  FireIcon,
  HomeIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);

  return (
    <>
      {/* Narrow sidebar*/}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-4">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <FireIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              <div className="pt-5 pb-4">
                <div className="flex-shrink-0 flex items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                    alt="Workflow"
                  />
                </div>
                <nav aria-label="Sidebar" className="mt-5">
                  <div className="px-2 space-y-1">
                    {navigationS.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      >
                        <item.icon
                          className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                <a href="#" className="flex-shrink-0 group block">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                        {user.name}
                      </p>
                      <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                        Account Settings
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
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
            <div className="flex-shrink-0 flex pb-5">
              <a href="#" className="flex-shrink-0 w-full">
                <img
                  className="block mx-auto h-10 w-10 rounded-full"
                  src={user.imageUrl}
                  alt=""
                />
                <div className="sr-only">
                  <p>{user.name}</p>
                  <p>Account settings</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
