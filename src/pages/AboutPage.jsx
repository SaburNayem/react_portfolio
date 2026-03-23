import { useOutletContext } from "react-router-dom";
import About from "../sections/About";
import BasicInfo from "../sections/BasicInfo";

export default function AboutPage() {
  const { lampOn } = useOutletContext();
  return (
    <>
      <BasicInfo lampOn={lampOn} />
      <About lampOn={lampOn} />
    </>
  );
}
