import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout/")({
    component: () => <h1>Home</h1>,
});
