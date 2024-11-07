import { createFileRoute, Outlet } from "@tanstack/react-router";
import Header from "@/components/Header";
import Nav from "@/components/Nav";

export const Route = createFileRoute("/_layout")({
    component: () => (
        <>
            <Header />
            <main>
                <Nav />
                <Outlet />
            </main>
        </>
    ),
});
