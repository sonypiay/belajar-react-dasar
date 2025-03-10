import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import ContactForm from "../contact/ContactForm.jsx";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <ContactForm />
        </StrictMode>
    );