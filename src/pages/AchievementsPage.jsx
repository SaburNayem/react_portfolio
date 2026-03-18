import { useOutletContext } from "react-router-dom";
import Achievements from "../sections/Achievements";

export default function AchievementsPage() {
  const { lampOn } = useOutletContext();
  return <Achievements lampOn={lampOn} />;
}
