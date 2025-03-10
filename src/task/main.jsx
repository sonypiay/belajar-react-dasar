import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Task from "./Task.jsx";

createRoot(document.querySelector("#root"))
    .render(
        <StrictMode>
            <Task />
        </StrictMode>
    );