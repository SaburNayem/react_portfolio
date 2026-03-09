import { useState } from "react";

export default function useLampToggle(initial = false) {
  const [lampOn, setLampOn] = useState(initial);
  const toggleLamp = () => setLampOn((prev) => !prev);
  return { lampOn, toggleLamp };
}
