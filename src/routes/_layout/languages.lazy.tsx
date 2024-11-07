import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout/languages")({
    component: () => <h1>Idiomas</h1>,
});
