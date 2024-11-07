import { Link } from "@tanstack/react-router";
import classes from "./Nav.module.css";
import useNav from "./useNav";

export default function Nav() {
    const { t, handleSelectNavigation, currentRoute } = useNav();

    return (
        <div className={classes.navContainer}>
            <nav className={`${classes.mobileNav}`}>
                <select value={currentRoute} onChange={handleSelectNavigation}>
                    <option value="/">{t("nav.about")}</option>
                    <option value="/experience">{t("nav.experience")}</option>
                    <option value="/skills">{t("nav.skills")}</option>
                    <option value="/languages">{t("nav.languages")}</option>
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
