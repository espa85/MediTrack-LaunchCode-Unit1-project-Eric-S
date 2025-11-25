import React from "react";
import { useAuth } from "../auth/AuthContext";
import doctors from "../data/doctors";

export default function ProfileBar() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return null;
  }

  let displayName = user.username;
  let roleLabel = "";

  if (user.role === "doctor") {
    const doctor = doctors.find((d) => d.id === user.doctorId);
    displayName = doctor?.displayName || user.username;
    roleLabel = "Doctor";
  } else if (user.role === "admin") {
    displayName = "Admin";
    roleLabel = "Administrator";
  }

  return (
    <div className="profile-bar">
      <div className="profile-bar-inner">
        <div className="profile-bar-user">
          <span className="profile-bar-label">Signed in as</span>
          <span className="profile-bar-name">{displayName}</span>
        </div>
        {roleLabel && <span className="profile-bar-role">{roleLabel}</span>}
      </div>
    </div>
  );
}
