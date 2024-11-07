import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout/experience")({
    component: () => <h1>Experiências</h1>,
});
