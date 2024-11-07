import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/skills")({
    component: () => <h1>Habilidades</h1>,
});
