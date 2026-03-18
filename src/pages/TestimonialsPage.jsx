import { useOutletContext } from "react-router-dom";
import Testimonials from "../sections/Testimonials";

export default function TestimonialsPage() {
  const { lampOn } = useOutletContext();
  return <Testimonials lampOn={lampOn} />;
}
