import DoctorProfileInfo from "./DoctorProfileInfo";
import DoctorCredentials from "./DoctorCredentials";

export default function DoctorProfilePanel({ doctor, onBack }) {
  return (
    <section className="doctor-profile-panel">
      <header className="doctor-profile-header">
        <button type="button" onClick={onBack}>
          ← Back to Doctors
        </button>
        <h2>{doctor.displayName}</h2>
      </header>

      <div className="doctor-profile-content">
        <DoctorProfileInfo doctor={doctor} />
        <DoctorCredentials doctor={doctor} />
      </div>
    </section>
  );
}