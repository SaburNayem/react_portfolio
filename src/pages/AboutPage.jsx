import { useOutletContext } from "react-router-dom";
import About from "../sections/About";

export default function AboutPage() {
  const { lampOn } = useOutletContext();
  return (
    <>
      <About lampOn={lampOn} />
    </>
  );
}
