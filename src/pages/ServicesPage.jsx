import { useOutletContext } from "react-router-dom";
import Services from "../sections/Services";

export default function ServicesPage() {
  const { lampOn } = useOutletContext();
  return <Services lampOn={lampOn} />;
}
