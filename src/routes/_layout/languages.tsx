import { createFileRoute } from "@tanstack/react-router";
import data from "@/assets/data/languages.json";
import Language from "@/pages/Language";

export const Route = createFileRoute("/_layout/languages")({
    loader() {
        return { languageData: data };
    },

    component: function LanguagesRoute() {
        const { languageData } = Route.useLoaderData();
        return <Language languageData={languageData} />;
    },
});
