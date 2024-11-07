import useDateFns from "@/hooks/useDateFns";
import { ExperienceCardProps } from "./ExperienceCardProps";
import { t } from "i18next";
import i18n from "@/i18n";

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
                        i18n.exists(`pages.experience.skills.${it}`)
                            ? t(`pages.experience.skills.${it}`)
                            : it,
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
