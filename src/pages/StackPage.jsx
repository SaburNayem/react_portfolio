import { useOutletContext } from "react-router-dom";
import Skills from "../sections/Skills";

export default function StackPage() {
  const { lampOn } = useOutletContext();
  return <Skills lampOn={lampOn} />;
}
