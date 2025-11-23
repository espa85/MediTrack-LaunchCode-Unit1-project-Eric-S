export default function DoctorSelectDropdown({ doctors, value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <label className="doctor-select">
      <span>Doctor:</span>
      <select value={value} onChange={handleChange}>
        <option value="all">All Doctors</option>
        {doctors.map((doc) => (
          <option key={doc.id} value={doc.id}>
            {doc.displayName}
          </option>
        ))}
      </select>
    </label>
  );
}