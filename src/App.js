import RootLayout from "./components/RootLayout";
import { Route, Routes } from "react-router-dom";
import TimeReporting from "./components/TimeReporting";
import Settings from "./components/Settings";

const App = () => {
  return (
      <RootLayout>
        <Routes>
          <Route path="/" element={<TimeReporting />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </RootLayout>
  );
};

export default App;
