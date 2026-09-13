import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <h1>Hamed Saeedi</h1>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Java</li>
        <li>JavaScript</li>
        <br />
        <button>Contact Me</button>
      </ul>
    </div>
  </StrictMode>,
);
