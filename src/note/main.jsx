import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NoteApp from "./NoteApp.jsx";

createRoot(document.querySelector("#root"))
    .render(
        <StrictMode>
            <NoteApp />
        </StrictMode>
    );