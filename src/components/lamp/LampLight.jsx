export default function LampLight({ lampOn }) {
  return <div className={`lamp-light ${lampOn ? "on" : ""}`} />;
}
