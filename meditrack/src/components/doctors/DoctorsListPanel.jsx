import DoctorCardGrid from "./DoctorCardGrid";
import DoctorTable from "./DoctorTable";

export default function DoctorsListPanel({ doctors, viewMode, onSelectDoctor }) {
  // Table view will be wired in next feature; for now, default to cards.
  if (viewMode === "table") {
    return (
      <section className="doctors-list-panel">
        {viewMode === "table" ? (
          <DoctorTable doctors={doctors} onSelectDoctor={onSelectDoctor} />
        ) : (
          <DoctorCardGrid doctors={doctors} onSelectDoctor={onSelectDoctor} />
        )}
      </section>
    );
  }

  return (
    <section className="doctors-list-panel">
      <DoctorCardGrid doctors={doctors} onSelectDoctor={onSelectDoctor} />
    </section>
  );
}