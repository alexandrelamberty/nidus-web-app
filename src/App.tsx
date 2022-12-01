import { FireIcon } from "@heroicons/react/24/outline";
import { Outlet, Route, Routes } from "react-router";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Register from "./features/auth/Register";
import SignIn from "./features/auth/SignIn";
import { Capabilities } from "./features/capability/Capabilities";
import { Dashboard } from "./features/dashboard/Dashboard";
import { Devices } from "./features/device/Devices";
import { Settings } from "./features/settings/Settings";
import { Zones } from "./features/zone/Zones";
import { NoMatch } from "./routes/NoMatch";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<NoLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="register" element={<Register />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="devices" element={<Devices />} />
        <Route path="capabilities" element={<Capabilities />} />
        <Route path="zones" element={<Zones />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
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
    <div className="h-full flex">
      <div className="min-h-0 flex-1 flex overflow-hidden">
        <Sidebar />
        <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
          {/* Mobile top navigation */}
          {/* Content */}
          <main className="flex-1 flex overflow-hidden">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
