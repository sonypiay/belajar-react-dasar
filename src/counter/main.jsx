import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CounterApp from "./CounterApp.jsx";

createRoot(document.querySelector("#root"))
    .render(
        <StrictMode>
            <CounterApp />
        </StrictMode>
    )