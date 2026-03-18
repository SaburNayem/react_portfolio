import { useOutletContext } from "react-router-dom";
import Projects from "../sections/Projects";

export default function ProjectsPage() {
  const { lampOn } = useOutletContext();
  return <Projects lampOn={lampOn} />;
}
