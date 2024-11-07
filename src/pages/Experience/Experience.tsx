import { useTranslation } from "react-i18next";
import { ExperienceProps } from "./ExperienceProps";
import ExperienceCard from "@/components/ExperienceCard";
import React from "react";
import { useNavigate } from "@tanstack/react-router";

export default function Experience(props: ExperienceProps) {
    const { t } = useTranslation();
    const navigate = useNavigate({ from: "/experience" });

    const [filter, setFilter] = React.useState("");

    React.useEffect(() => {
        navigate({
            to: "/experience",
            search: { filter },
        });
    }, [filter, navigate]);

    return (
        <article>
            <h1>{t("nav.experience")}</h1>

            <fieldset>
                <legend>{t("common.filter.title")}</legend>
                <input
                    type="text"
                    placeholder={t("common.filter.placeholder")}
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
                <small>{t("common.filter.help")}</small>
            </fieldset>

            {props.experienceData.map((it) => (
                <ExperienceCard key={it.where + it.since} {...it} />
            ))}
        </article>
    );
}
