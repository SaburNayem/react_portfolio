import { useOutletContext } from "react-router-dom";
import Experience from "../sections/Experience";

export default function ExperiencePage() {
  const { lampOn } = useOutletContext();
  return <Experience lampOn={lampOn} />;
}
