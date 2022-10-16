import { Outlet, Route, Routes } from "react-router";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { Capabilities } from "./features/capability/Capabilities";
import { Dashboard } from "./features/dashboard/Dashboard";
import { Devices } from "./features/device/Devices";
import { Settings } from "./features/settings/Settings";
import { Zones } from "./features/zone/Zones";
import { NoMatch } from "./routes/NoMatch";

function App() {
  return (
    <Routes>
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

function Layout() {
  return (
    <div className="h-full flex">
      <div className="min-h-0 flex-1 flex overflow-hidden">
        <Sidebar />
        <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex p-4">
          <section>
            <Outlet />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
