import { useOutletContext } from "react-router-dom";
import Hero from "../sections/Hero";

export default function Home() {
  const { lampOn } = useOutletContext();

  return <Hero lampOn={lampOn} />;
}
