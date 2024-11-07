import { useTranslation } from "react-i18next";
import { SkillsProps } from "./SkillsProps";

export default function Skills(props: SkillsProps) {
    const { t } = useTranslation();

    return (
        <article>
            <h1>{t("nav.skills")}</h1>

            <table>
                <thead>
                    <tr>
                        <th>{t("pages.skills.skill")}</th>
                        <th>{t("pages.skills.time")}</th>
                    </tr>
                </thead>
                <tbody>
                    {props.skills.map((it) => (
                        <tr key={it.name}>
                            <td>
                                {t(`common.skills.${it.name}`, {
                                    defaultValue: it.name,
                                })}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </article>
    );
}
