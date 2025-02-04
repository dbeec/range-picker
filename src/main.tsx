import { createRoot } from "react-dom/client";
import "./index.css";
import DatePick from "./date.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    {/* <App /> */}
    <DatePick />
  </>
);
