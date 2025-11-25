import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import TitleBanner from "./layout/TitleBanner";
import NavBar from "./layout/NavBar";
import ProfileBar from "./layout/ProfileBar";
import HomePage from "./pages/HomePage";
import DoctorsPage from "./pages/DoctorsPage";
import ExpiredPage from "./pages/ExpiredPage";
import AboutPage from "./pages/AboutPage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";
import { useAuth } from "./auth/AuthContext";


export default function ProtectedRoute({ children }) {
const { isAuthenticated } = useAuth();


if (!isAuthenticated) {
return <Navigate to="/login" replace />;
}


return children;
}


function App() {
  return (
    <div className="app-shell">
      <TitleBanner />
      <NavBar />
      <ProfileBar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/doctors"
            element={
              <ProtectedRoute>
                <DoctorsPage />
              </ProtectedRoute>
            }
          />
          <Route path="/expired" element={<ExpiredPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
    </div>
  )
}