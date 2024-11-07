import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout/skills")({
    component: () => <h1>Habilidades</h1>,
});
