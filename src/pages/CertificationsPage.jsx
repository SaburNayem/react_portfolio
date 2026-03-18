import { useOutletContext } from "react-router-dom";
import Certifications from "../sections/Certifications";

export default function CertificationsPage() {
  const { lampOn } = useOutletContext();
  return <Certifications lampOn={lampOn} />;
}
