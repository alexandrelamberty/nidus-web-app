import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/ui/alert-dialog";
import { Cog6ToothIcon, HomeIcon, LinkIcon } from "@heroicons/react/24/outline";
import { CodeBracketIcon, Squares2X2Icon } from "@heroicons/react/24/solid";
import { Outlet, Route, Routes, useLocation } from "react-router";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "./components/ThemeProvider";
import { GeneralSettings } from "./features/settings/GeneralSettings";
import { SecuritySettings } from "./features/settings/SecuritySettings";
import { Capabilities } from "./routes/Capabilities";
import { Dashboard } from "./routes/Dashboard";
import { Devices } from "./routes/Devices";
import { NoMatch } from "./routes/NoMatch";
import { Register } from "./routes/Register";
import { Settings } from "./routes/Settings";
import { SignIn } from "./routes/SignIn";
import { Zones } from "./routes/Zones";
import { useState } from "react";

const user = {
  name: "Emily Selman",
  imageUrl:
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const links = [
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
    current: false,
  },
  {
    name: "Capabilities",
    icon: CodeBracketIcon,
    href: "/capabilities",
    current: false,
  },
  {
    name: "Settings",
    icon: Cog6ToothIcon,
    href: "/settings",
    current: false,
  },
];

/**
 *  React Router v6 testing
 *  https://testing-library.com/docs/example-react-router/
 */
export const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
};

function App() {
  const [showAlert, setShowAlert] = useState(true);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="nidus-ui-theme">
      <Routes>
        <Route path="/auth" element={<NoLayout />}>
          <Route index element={<SignIn />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="devices" element={<Devices />} />
          <Route path="capabilities" element={<Capabilities />} />
          <Route path="zones" element={<Zones />} />
          <Route path="zones/:id" element={<Zones />} />
          <Route path="settings" element={<Settings />}>
            <Route index element={<GeneralSettings />} />
            <Route path="security" element={<SecuritySettings />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      {/* For testing */}
      <LocationDisplay />
      {/* Application alerts */}
      <AlertDialog open={showAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setShowAlert(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => setShowAlert(false)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </ThemeProvider>
  );
}

// Centered layout
function NoLayout() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-1/4 md:w-1/4 sm:w-auto">
        <Outlet />
      </div>
    </div>
  );
}

function Layout() {
  return (
    <div id="app" className="h-full flex">
      <div className="min-h-0 flex-1 flex overflow-hidden">
        <Sidebar links={links} user={user} />
        <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
          <main className="flex-1 flex overflow-hidden">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
