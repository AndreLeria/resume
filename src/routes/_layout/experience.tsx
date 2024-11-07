import { createFileRoute } from "@tanstack/react-router";
import data from "@/assets/data/experience.json";
import Experience from "@/pages/Experience";

export const Route = createFileRoute("/_layout/experience")({
    validateSearch: (search: Record<string, unknown>) => ({
        filter: typeof search.filter === "string" ? search.filter.trim() : "",
    }),

    loaderDeps: ({ search: { filter } }) => ({ filter }),

    loader({ deps: { filter } }) {
        const keywords = filter.split(",").map((it) => it.trim().toLowerCase());
        const experienceData =
            keywords.length === 0
                ? data
                : data.filter((it) =>
                      it.skills
                          .map((skill) => skill.toLowerCase())
                          .some((skill) =>
                              keywords.some((keyword) =>
                                  skill.includes(keyword),
                              ),
                          ),
                  );
        return { experienceData };
    },

    component: function ExperienceRoute() {
        const { experienceData } = Route.useLoaderData();
        return <Experience experienceData={experienceData} />;
    },
});
