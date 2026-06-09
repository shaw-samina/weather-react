import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import "./Weather.css";
import Weather from "./Weather.jsx";
import Footer from "./Footer.jsx";
import "./Footer.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Weather />
    <Footer />
  </StrictMode>
);
