import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();
    return (
        <article>
            <h1>{t("nav.about")}</h1>
            <p>{t("pages.about.bio")}</p>
        </article>
    );
}
