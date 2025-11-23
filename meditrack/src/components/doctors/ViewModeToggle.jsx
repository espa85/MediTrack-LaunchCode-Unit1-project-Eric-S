export default function ViewModeToggle({ viewMode, onChange }) {
  return (
    <div className="view-mode-toggle">
      <button
        type="button"
        className={viewMode === "card" ? "active" : ""}
        onClick={() => onChange("card")}
      >
        Card View
      </button>
      <button
        type="button"
        className={viewMode === "table" ? "active" : ""}
        onClick={() => onChange("table")}
      >
        Table View
      </button>
    </div>
  );
}