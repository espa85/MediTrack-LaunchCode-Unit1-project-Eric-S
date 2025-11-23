import DoctorCard from "./DoctorCard";

export default function DoctorCardGrid({ doctors, onSelectDoctor }) {
  return (
    <div className="doctor-card-grid">
      {doctors.map((doctor) => (
        <DoctorCard
          key={doctor.id}
          doctor={doctor}
          onClick={() => onSelectDoctor(doctor.id)}
        />
      ))}
    </div>
  );
}