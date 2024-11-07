import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import classes from "./Nav.module.css";

export default function Nav() {
    const { t } = useTranslation();

    return (
        <div className={classes.navContainer}>
            <nav className={`${classes.mobileNav}`}>
                <select>
                    <option>{t("nav.about")}</option>
                    <option>{t("nav.experience")}</option>
                    <option>{t("nav.skills")}</option>
                    <option>{t("nav.languages")}</option>
                </select>
            </nav>

            <nav className={`${classes.desktopNav} grid`}>
                <Link to="/">{t("nav.about")}</Link>
                <Link to="/experience">{t("nav.experience")}</Link>
                <Link to="/skills">{t("nav.skills")}</Link>
                <Link to="/languages">{t("nav.languages")}</Link>
            </nav>
        </div>
    );
}
