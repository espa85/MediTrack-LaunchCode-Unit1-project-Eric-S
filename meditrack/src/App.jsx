import { BrowserRouter, Routes, Route } from "react-router-dom";
import TitleBanner from "./components/layout/TitleBanner";
import NavBar from "./components/layout/NavBar";


import HomePage from "./pages/HomePage";
import DoctorsPage from "./pages/DoctorsPage";
import ExpiredPage from "./pages/ExpiredPage";
import AboutPage from "./pages/AboutPage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";


export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <TitleBanner />
        <NavBar />
        <main className="app-main">
          <Routes>
            <Route path ="/" element={<HomePage />} />
            <Route path ="/doctors" element={<DoctorsPage />} />
            <Route path ="/expired" element={<ExpiredPage />} />
            <Route path ="/about" element={<AboutPage />} />
            <Route path ="/settigns" element={<SettingsPate />} />
            <Route path ="/login" element={<LoginPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}