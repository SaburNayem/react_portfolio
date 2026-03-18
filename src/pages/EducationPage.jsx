import { useOutletContext } from "react-router-dom";
import Education from "../sections/Education";

export default function EducationPage() {
  const { lampOn } = useOutletContext();
  return <Education lampOn={lampOn} />;
}
