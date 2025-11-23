import DoctorCardGrid from "./DoctorCardGrid";

export default function DoctorsListPanel({ doctors, viewMode, onSelectDoctor }) {
  // Table view will be wired in next feature; for now, default to cards.
  if (viewMode === "table") {
    return (
      <section className="doctors-list-panel">
        <p>Table view coming soon…</p>
      </section>
    );
  }

  return (
    <section className="doctors-list-panel">
      <DoctorCardGrid doctors={doctors} onSelectDoctor={onSelectDoctor} />
    </section>
  );
}