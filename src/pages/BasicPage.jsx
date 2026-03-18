import { useOutletContext } from "react-router-dom";
import BasicInfo from "../sections/BasicInfo";

export default function BasicPage() {
  const { lampOn } = useOutletContext();
  return <BasicInfo lampOn={lampOn} />;
}
