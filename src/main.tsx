import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./i18n";
import "./index.scss";
import { routeTree } from "./routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";

const rootNode = document.querySelector("#root");

if (!rootNode) {
    throw "Failed to find mount point";
}

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

createRoot(rootNode).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
