export default function LightOverlay({ lampOn }) {
  return <div className={`lamp-light ${lampOn ? "on" : ""}`} />;
}
