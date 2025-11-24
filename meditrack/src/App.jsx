import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TitleBanner from "./components/layout/TitleBanner";
import NavBar from "./components/layout/NavBar";
import ProfileBar from "./components/layout/ProfileBar";


import HomePage from "./pages/HomePage";
import DoctorsPage from "./pages/DoctorsPage";
import ExpiredPage from "./pages/ExpiredPage";
import AboutPage from "./pages/AboutPage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";
import { doctors } from "./data/doctors";


export default function App() {
  const [currentUser, setCurrentUser] = useState(null);


  function handleLogin(user) {
    let displayName = user.username;

    if (user.role === "doctor" && user.doctorId) {
      const doc = doctors.find((d) => d.id === user.doctorId);
      if (doc && doc.displayName) {
        displayName = doc.displayName;
      }
    } else if (user.role === "admin") {
      displayName = "Administrator";
    }

    setCurrentUser({ ...user, displayName });
  }

  function handleLogout() {
    setCurrentUser(null);
  }

  return (
    <BrowserRouter>
      <div className="app-shell">
        <TitleBanner />
        <NavBar currentUser={currentUser} onLogout={handleLogout} />
        <ProfileBar currentUser={currentUser} />
        <main className="app-main">
          <Routes>
            <Route path ="/" element={<HomePage />} />
            <Route path ="/doctors" element={<DoctorsPage />} />
            <Route path ="/expired" element={<ExpiredPage />} />
            <Route path ="/about" element={<AboutPage />} />
            <Route path ="/settings" element={<SettingsPage />} />
            <Route path ="/login" element={<LoginPage />} />
            <Route 
              path="/login"
              element={<LoginPage onLogin={handleLogin} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}