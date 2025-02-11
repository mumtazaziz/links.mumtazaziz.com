export default function HomeLoading() {
  return (
    <div className="list-group">
      <div className="list-group-item d-flex gap-3 p-3 align-items-center placeholder-glow">
        <span className="placeholder fs-4" style={{ width: "1em" }}></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder text-body-secondary col-2"></span>
      </div>
      <div className="list-group-item d-flex gap-3 p-3 align-items-center placeholder-glow">
        <span className="placeholder fs-4" style={{ width: "1em" }}></span>
        <span className="placeholder col-6"></span>
        <span className="placeholder text-body-secondary col-2"></span>
      </div>
      <div className="list-group-item d-flex gap-3 p-3 align-items-center placeholder-glow">
        <span className="placeholder fs-4" style={{ width: "1em" }}></span>
        <span className="placeholder col-3"></span>
        <span className="placeholder text-body-secondary col-4"></span>
      </div>
    </div>
  );
}
