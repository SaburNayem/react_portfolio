export default function LampModel({ lampOn }) {
  return (
    <div className={`lamp-illustration ${lampOn ? "is-on" : "is-off"}`} aria-hidden="true">
      <div className="lamp-shade">
        <span className="shade-top" />
        <span className="shade-bottom" />
        <span className="eye eye-left" />
        <span className="eye eye-right" />
        <span className="mouth" />
      </div>
      <div className="lamp-shade-inner" />
      <div className="lamp-glow" />
      <div className="lamp-pole" />
      <div className="lamp-base" />
      <div className="lamp-table-top" />
    </div>
  );
}
