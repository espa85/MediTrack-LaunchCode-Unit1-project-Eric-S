import defaultDoctorImage from "../../assets/default-doctor.png";

export default function DoctorCard({ doctor, onClick }) {
  const imageSrc = doctor.photoUrl || defaultDoctorImage;

  return (
    <button type="button" className="doctor-card" onClick={onClick}>
      <div className="doctor-card-image-wrapper">
        <img
          src={imageSrc}
          alt={doctor.fullName}
          className="doctor-card-image"
        />
      </div>
      <div className="doctor-card-body">
        <h3>{doctor.fullName}</h3>
        <p>{doctor.role}</p>
        <p>{doctor.specialty}</p>
      </div>
    </button>
  );
}