import { useOutletContext } from "react-router-dom";
import Contact from "../sections/Contact";

export default function ContactPage() {
  const { lampOn } = useOutletContext();
  return <Contact lampOn={lampOn} />;
}
