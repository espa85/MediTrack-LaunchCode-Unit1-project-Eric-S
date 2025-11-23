export default function DoctorProfileInfo({ doctor }) {
  return (
    <div className="doctor-profile-info">
      <p>
        <strong>Role:</strong> {doctor.role}
      </p>
      <p>
        <strong>Specialty:</strong> {doctor.specialty}
      </p>
      <p>
        <strong>Facility Code:</strong> {doctor.facilityCode}
      </p>
      <p>
        <strong>Department Code:</strong> {doctor.departmentCode}
      </p>
      {/* Map in additional fields from your Master Doctor Data as needed */}
    </div>
  );
}