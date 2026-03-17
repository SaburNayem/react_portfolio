import RopePull from "./RopePull";

export default function LampModel({ lampOn, toggleLamp, waveToken }) {
  return (
    <div className={`lamp-illustration ${lampOn ? "is-on" : "is-off"}`} aria-hidden="true">
      <div className="lamp-shade">
        <span className="shade-top" />
        <span className="shade-bottom" />
      </div>
      <div className="lamp-neck" />
      <div className="lamp-socket" />
      <div className="lamp-bulb" />
      <div className="lamp-shade-inner" />
      <div className="lamp-glow" />
      <div className="lamp-pole" />
      <div className="lamp-base" />
      <div className="lamp-table-top" />
      <RopePull toggleLamp={toggleLamp} waveToken={waveToken} />
    </div>
  );
}
