export default function DoctorTable({ doctors, onSelectDoctor }) {
  return (
    <table className="doctor-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Specialty</th>
        </tr>
      </thead>
      <tbody>
        {doctors.map((doctor) => (
          <tr
            key={doctor.id}
            className="doctor-table-row"
            onClick={() => onSelectDoctor(doctor.id)}
          >
            <td>{doctor.fullName}</td>
            <td>{doctor.role}</td>
            <td>{doctor.specialty}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}