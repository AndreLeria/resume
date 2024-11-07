import useDateFns from "@/hooks/useDateFns";
import { ExperienceCardProps } from "./ExperienceCardProps";
import { t } from "i18next";

export default function ExperienceCard(props: ExperienceCardProps) {
    const { formatExperienceDate } = useDateFns();

    return (
        <article>
            <header>
                <strong>
                    {t("pages.experience.title", {
                        title: t(`pages.experience.titles.${props.title}`),
                        where: props.where,
                    })}
                </strong>
            </header>
            <p>
                {t("pages.experience.skillSet")}:{" "}
                {props.skills
                    .map((it) =>
                        t(`common.skills.${it}`, {
                            defaultValue: it,
                        }),
                    )
                    .join(", ")}
            </p>
            <footer>
                <small>
                    {t("pages.experience.timespan", {
                        since: formatExperienceDate(props.since),
                        until: props.until
                            ? formatExperienceDate(props.until)
                            : t("experience.untilNow"),
                    })}
                </small>
            </footer>
        </article>
    );
}
