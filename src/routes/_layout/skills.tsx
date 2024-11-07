import { createFileRoute } from "@tanstack/react-router";
import experienceData from "@/assets/data/experience.json";
import studyData from "@/assets/data/study.json";
import * as R from "ramda";

export const Route = createFileRoute("/_layout/skills")({
    loader() {},

    component: () => <h1>Habilidades</h1>,
});
