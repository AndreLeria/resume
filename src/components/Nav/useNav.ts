import { useMatchRoute } from "@tanstack/react-router";
import { Route as AboutRoute } from "@/routes/_layout/index.lazy";
import { Route as ExperienceRoute } from "@/routes/_layout/experience.lazy";
import { Route as SkillsRoute } from "@/routes/_layout/skills.lazy";
import { Route as LanguagesRoute } from "@/routes/_layout/languages.lazy";

export default function useNav() {
    const matchRoute = useMatchRoute();
    const isAboutRoute = matchRoute(AboutRoute.options.id);
    const isExperienceRoute = matchRoute(ExperienceRoute.options.id);
    const isSkillsRoute = matchRoute(SkillsRoute.options.id);
    const isLanguagesRoute = matchRoute(LanguagesRoute.options.id);

    return { isAboutRoute, isExperienceRoute, isSkillsRoute, isLanguagesRoute };
}
