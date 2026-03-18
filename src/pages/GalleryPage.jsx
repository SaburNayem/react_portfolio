import { useOutletContext } from "react-router-dom";
import Gallery from "../sections/Gallery";

export default function GalleryPage() {
  const { lampOn } = useOutletContext();
  return <Gallery lampOn={lampOn} />;
}
