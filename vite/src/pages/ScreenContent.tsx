import { useLocation } from "react-router-dom";
import data from "../../data.json";

function ScreenContent() {
  const { pathname } = useLocation();
  const [, folder, pageName] = pathname.split("/");

  const page = data[folder].find(
    (p) => p.name.toLowerCase() === pageName.toLowerCase()
  );

  const { description, distance, images, name, travel } = page;

  console.log("opage", page);

  return <div>

    
  </div>;
}

export default ScreenContent;
