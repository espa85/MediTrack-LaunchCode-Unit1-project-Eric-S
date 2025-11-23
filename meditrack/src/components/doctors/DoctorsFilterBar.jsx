import DoctorSelectDropdown from "./DoctorSelectDropdown";
import ViewModeToggle from "./ViewModeToggle";

export default function DoctorsFilterBar({
  doctors,
  filterDoctorId,
  onFilterChange,
  viewMode,
  onViewModeChange,
}) {
  return (
    <section className="doctors-filter-bar">
      <div className="filter-bar-left">
        <DoctorSelectDropdown
          doctors={doctors}
          value={filterDoctorId}
          onChange={onFilterChange}
        />
      </div>
      <div className="filter-bar-right">
        <ViewModeToggle viewMode={viewMode} onChange={onViewModeChange} />
      </div>
    </section>
  );
}