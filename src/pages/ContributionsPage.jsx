import { useOutletContext } from "react-router-dom";
import Contributions from "../sections/Contributions";

export default function ContributionsPage() {
  const { lampOn } = useOutletContext();
  return <Contributions lampOn={lampOn} />;
}
