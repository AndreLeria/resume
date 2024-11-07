import { useTranslation } from "react-i18next";
import { LanguageProps } from "./LanguageProps";

export default function Language(props: LanguageProps) {
    const { t } = useTranslation();

    return (
        <article>
            <h1>{t("nav.languages")}</h1>
            <table>
                <thead>
                    <tr>
                        <th>{t("pages.languages.header.language")}</th>
                        <th>{t("pages.languages.header.level")}</th>
                    </tr>
                </thead>
                <tbody>
                    {props.languageData.map((it) => (
                        <tr key={it.language}>
                            <td>
                                {t(`pages.languages.languages.${it.language}`)}
                            </td>
                            <td>{t(`pages.languages.levels.${it.level}`)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </article>
    );
}
