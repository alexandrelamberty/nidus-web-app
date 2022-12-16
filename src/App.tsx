import { Outlet, Route, Routes, useLocation } from "react-router";
import "./App.css";
import Sidebar from "./components/Sidebar";

import { NoMatch } from "./routes/NoMatch";
import { Capabilities } from "./routes/Capabilities";
import { Dashboard } from "./routes/Dashboard";
import { Devices } from "./routes/Devices";
import { Settings } from "./routes/Settings";
import { Zones } from "./routes/Zones";
import { Register } from "./routes/Register";
import { SignIn } from "./routes/SignIn";

/**
 *  React Router v6 testing
 *  https://testing-library.com/docs/example-react-router/
 */
export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<NoLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="*" element={<NoMatch />} />
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
      <LocationDisplay />
    </>
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
