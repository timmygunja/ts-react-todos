import "./Checkbox.css";

function Checkbox() {
  return (
    <div className="container">
      <div className="round">
        <input type="checkbox" checked id="checkbox" />
        <label className="checkbox"></label>
      </div>
    </div>
  );
}

export default Checkbox;
