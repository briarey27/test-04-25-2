import { createRoot } from "react-dom/client";
import "app/styles/index.scss";
import App from "app/App.tsx";
import AppProviders from "./app/providers";

createRoot(document.getElementById("root")!).render(
    <AppProviders>
        <App />
    </AppProviders>,
);
