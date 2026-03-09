export default function LampModel({ lampOn }) {
  return (
    <div className={`lamp-illustration ${lampOn ? "is-on" : "is-off"}`} aria-hidden="true">
      <div className="lamp-shade">
        <span className="eye eye-left" />
        <span className="eye eye-right" />
        <span className="mouth" />
      </div>
      <div className="lamp-glow" />
      <div className="lamp-leg lamp-leg-left" />
      <div className="lamp-leg lamp-leg-right" />
      <div className="lamp-stem" />
      <div className="lamp-base" />
    </div>
  );
}
