import "./styles/main.scss"
import { Route, Routes } from "react-router-dom";
import { PopupsPage } from "./pages/PopupsPage";
import { HomePage } from "./pages/HomePage";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/popup" element={<PopupsPage />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
